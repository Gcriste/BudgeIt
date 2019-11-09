import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import setAuthToken from "../utils/setAuthToken";
import {Redirect } from "react-router-dom";
import Moment from 'react-moment';
import Dash from '../components/Dashboard';
import {Category, Input, PostButton } from '../components/Transaction';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import PrintTransaction from "../components/PrintTransactions";
import TotalTransaction from '../components/TotalTransaction';

const styles = {
  error:{
    color:'red',
    fontSize: '0.7rem',
    margin:0
  }
}

class TotalBudget extends Component {

    constructor(props) {
        super(props);
        // this.handleDayChange = this.handleDayChange.bind(this);

  this.state = {
      userid:"",
      user:{},
      budgets:{},
      food:"",
      transportation:"",
      lifestyle:"",
      housing:"",
      debt:"",
      insurance:"",
      savings:"",
      date:"",
      amount:"",
      description:"",
     transactions:[],
      budgetid:"",
      foodArray:[],
      transportationArray:[],
      lifestyleArray:[],
      housingArray:[],
      debtArray:[],
      insuranceArray:[],
      savingsArray:[],
      underBudget:{},
      overBudget:{}

    };
    }

   handleLogout = () => {
        localStorage.removeItem('example-app')
        this.setState({
            redirect:true
        })
    }


  componentDidMount() {


    const token = localStorage.getItem('example-app');
    if(token){
        setAuthToken(token);
    }
    
   API.getUsers()
   .then(response => {
     let userId = response.data._id
     console.log(userId)
      this.setState({
        user:response.data,
          userid:response.data._id
      })

    API.getBudgetByUser(userId)
  .then(response => {
  
 
    this.setState({
      budgets:response.data,
      food:response.data[0].budgets[0].food,
      transportation:response.data[0].budgets[1].transportation,
      lifestyle:response.data[0].budgets[2].lifestyle,
      housing:response.data[0].budgets[3].housing,
      debt:response.data[0].budgets[4].debt,
      insurance:response.data[0].budgets[5].insurance,
      savings:response.data[0].budgets[6].savings,
      budgetid:response.data[0]._id
    })
  })

  let foodArray = [];
  let transportationArray =[];
  let lifestyleArray = [];
  let housingArray = [];
  let debtArray = [];
  let insuranceArray = [];
  let savingsArray = []; 


  API.getTransactionByUser(userId)
  .then(res => {
    let results = res.data
   
    // map through the array of transactions
    results = results.map(result => {
        //store each gig information in a new object 
        result = {
            id: result.id,
            amount: result.amount,
            budgetid: result.budgetid,
            category: result.category,
            date: result.date,
            description:result.description,
            userid:result.userid
        }

        if(result.category === "food"){
          foodArray.push(result)
        }
        if(result.category === "transportation"){
          transportationArray.push(result)
        }
        if(result.category === "lifestyle"){
          lifestyleArray.push(result)
        }
        if(result.category === "housing"){
          housingArray.push(result)
        }
        if(result.category === "debt"){
          debtArray.push(result)
        }
        if(result.category === "insurance"){
          insuranceArray.push(result)
        }
        if(result.category === "savings"){
          savingsArray.push(result)
        }
      
        return result;
    })


 

    let foodSum = foodArray.reduce(function(prev, current) {
      return prev + +current.amount
    }, 0);
    let transportationSum = transportationArray.reduce(function(prev, current) {
      return prev + +current.amount
    }, 0);
    let lifestyleSum = lifestyleArray.reduce(function(prev, current) {
      return prev + +current.amount
    }, 0);
    let housingSum = housingArray.reduce(function(prev, current) {
      return prev + +current.amount
    }, 0);
    let debtSum = debtArray.reduce(function(prev, current) {
      return prev + +current.amount
    }, 0);
    let insuranceSum = insuranceArray.reduce(function(prev, current) {
      return prev + +current.amount
    }, 0);
    let savingsSum = savingsArray.reduce(function(prev, current) {
      return prev + +current.amount
    }, 0);



    let underBudget = {}
    let overBudget = {}
    if (foodSum < this.state.food){
      underBudget.food = "Under Budget"
      this.setState({underBudget})
    }
    else{
      overBudget.food = "Over Budget!"
      this.setState({overBudget})
    }

    if (transportationSum < this.state.transportation){
      underBudget.transportation = "Under Budget"
      this.setState({underBudget})
    }
    else{
      overBudget.transportation= "Over Budget!"
      this.setState({overBudget})
    }
    if (lifestyleSum < this.state.lifestyle){
      underBudget.lifestyle= "Under Budget"
      this.setState({underBudget})
    }
    else{
      overBudget.lifestyle= "Over Budget!"
      this.setState({overBudget})
    }
    if (housingSum < this.state.housing){
      underBudget.housing = "Under Budget"
      this.setState({underBudget})
    }
    else{
      overBudget.housing= "Over Budget!"
      this.setState({overBudget})
    }
    if (debtSum < this.state.debt){
      underBudget.debt = "Under Budget"
      this.setState({underBudget})
    }
    else{
      overBudget.debt= "Over Budget!"
      this.setState({overBudget})
    }
    if (insuranceSum < this.state.insurance){
      underBudget.insurance = "Under Budget"
      this.setState({underBudget})
    }
    else{
      overBudget.insurance= "Over Budget!"
      this.setState({overBudget})
    }
    if (savingsSum < this.state.savings){
      underBudget.savings = "Under Budget"
      this.setState({underBudget})
    }
    else{
      overBudget.savings= "Over Budget!"
      this.setState({overBudget})
    }


    // console.log(this.state.food)
    //  console.log(foodArray)
    //  console.log(transportationArray)
    //  console.log(lifestyleArray)
    //  console.log(housingArray) 
    //  console.log(debtArray)
    //  console.log(insuranceArray)
    //  console.log(savingsArray)


    this.setState({ 
      transactions: results, 
      foodArray:foodArray,
      transportationArray:transportationArray,
      lifestyleArray:lifestyleArray,
      housingArray:housingArray,
      debtArray:debtArray,
      insuranceArray:insuranceArray,
      savingsArray:savingsArray,
      error: "" })



  })

  })

  }


 
  





  render() {
    


    const {redirect, user, food, transportation, lifestyle, housing, savings, debt, insurance, foodArray, transportationArray, lifestyleArray, housingArray, debtArray, insuranceArray, savingsArray, overBudget, underBudget} = this.state;

    if(redirect){
        return <Redirect to="/transaction" />
    }
  
      return (
        <Container>
  
        
      <div className="card">
        <div className = "profile-container">
         
            <div className = "profile">
                   <div className = "row">

                   <div className = "col-md-5">
                     <h1> <strong> Current Monthly Income: ${user.currentbudget}</strong></h1>
                         {' '}
                         <TotalTransaction 
                    foodArray ={foodArray}  
                    transportationArray ={transportationArray}
                    lifestyleArray ={lifestyleArray}
                    housingArray ={housingArray}
                    debtArray ={debtArray}
                    insuranceArray ={insuranceArray}
                    savingsArray ={savingsArray}
                    budgets = {this.state.budgets}
                    />
                         
                        
                    </div>

                   <div className = "col-md-5">
                
                   <br></br><br></br><br></br>
                   <div className="card">
                     <div className="card-body player">
                      <div className="article">
             
               
                        <h1> Money Budgetted</h1>


                        <div className={`four wide required field ${underBudget.food ? 'underBudget' : 'overBudget'}`}>
                        {underBudget.food && <div style = {styles.underBudget}>{underBudget.food}</div>}
                        {overBudget.food && <div style = {styles.overBudget}>{overBudget.food}</div>}
                        </div>
                        <p> <strong> Budget for Food: ${food} </strong></p>
                         {' '}
                      

                         <div className={`four wide required field ${underBudget.transportation ? 'underBudget' : 'overBudget'}`}>
                        {underBudget.transportation && <div style = {styles.underBudget}>{underBudget.transportation}</div>}
                        {overBudget.transportation && <div style = {styles.overBudget}>{overBudget.transportation}</div>}
                        </div>
                         <p> <strong> Budget for Transportation: ${transportation}  </strong></p>
                         {' '}


                         <div className={`four wide required field ${underBudget.lifestyle ? 'underBudget' : 'overBudget'}`}>
                        {underBudget.lifestyle && <div style = {styles.underBudget}>{underBudget.lifestyle}</div>}
                        {overBudget.lifestyle && <div style = {styles.overBudget}>{overBudget.lifestyle}</div>}
                        </div>
                         <p> <strong> Budget for Lifestyle: ${lifestyle} </strong></p>
                         {' '}


                         <div className={`four wide required field ${underBudget.housing ? 'underBudget' : 'overBudget'}`}>      
                        {underBudget.housing && <div style = {styles.underBudget}>{underBudget.housing}</div>}
                        {overBudget.housing && <div style = {styles.overBudget}>{overBudget.housing}</div>}
                        </div>
                         <p> <strong>  Budget for Housing: ${housing} </strong></p>
                         {' '}


                         <div className={`four wide required field ${underBudget.debt ? 'underBudget' : 'overBudget'}`}>                   
                        {underBudget.debt && <div style = {styles.underBudget}>{underBudget.debt}</div>}
                        {overBudget.debt && <div style = {styles.overBudget}>{overBudget.debt}</div>}
                        </div>
                         <p> <strong>  Budget for Debt: ${debt} </strong></p>
                         {' '}


                         <div className={`four wide required field ${underBudget.insurance ? 'underBudget' : 'overBudget'}`}>
                        {underBudget.insurance && <div style = {styles.underBudget}>{underBudget.insurance}</div>}
                        {overBudget.insurance && <div style = {styles.overBudget}>{overBudget.insurance}</div>}
                        </div>
                         <p> <strong>  Budget for Insurance: ${insurance} </strong></p>
                         {' '}



                         <div className={`four wide required field ${underBudget.savings ? 'underBudget' : 'overBudget'}`}>
                    
                        {underBudget.savings && <div style = {styles.underBudget}>{underBudget.savings}</div>}
                        {overBudget.savings && <div style = {styles.overBudget}>{overBudget.savings}</div>}
                        </div>
                         <p> <strong>  Budget for Savings: ${savings} </strong></p>
                         {' '}

                   </div>
                   </div>
                   </div>

                    </div>

                    <div className = "col-md-2">
                   <button className = "ui orange animated button" tabindex ="0"
                     onClick = { this.handleLogout}> 
                     <div className = "visible content">Logout</div>
                      <div className = "hidden content">
                      <i className = "right arrow icon"></i>
                    </div> 
                   </button>
                   </div>
                   </div>


                  
                </div>
                </div>

              </div>

                     </Container>
      
      )
  }

}

export default TotalBudget;