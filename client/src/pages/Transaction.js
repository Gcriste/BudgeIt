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



class Transaction extends Component {

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
  
  console.log(response.data)
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

  let categories = [];
  let foodarray = [];
  API.getTransactionByUser(userId)
  .then(res => {
    let results = res.data
    console.log(res.data)
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
        return result;
    })

    this.setState({ categories: results, error: "" })
 
  })

  })

  }

handlePostChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  
  handlePostSubmit = event => {

    
    event.preventDefault();
    console.log("hi")

    const newTransaction = {
   
     date: this.state.date,
    description:this.state.description,
     category:this.state.category,
     amount:this.state.amount,
     userid:this.state.userid,
     budgetid:this.state.budgetid
   }
   console.log(newTransaction)
    // api call to post gig
    API.postTransaction(newTransaction)
    .then(this.setState({ 
      redirect:true,
     //  message: alert("Your posted a gig! on " + this.state.date) 
     })
      )
    .catch(err => console.log(err));
   }





  render() {
    


    const {redirect, user, food, transportation, lifestyle, housing, savings, debt, insurance} = this.state;

    if(redirect){
        return <Redirect to="/" />
    }
  
      return (
        <Container>
  
        <Dash />
      <div className="card">
        <div className = "profile-container">
         
            <div className = "profile">
                   <div className = "row">
                     <div className = "col-md-4">

                     <Category
                    value={this.state.category}
                    onChange={this.handlePostChange}
                    name="category"
                    placeholder="Years of Experience"
                    />

                    {/* <DayPickerInput
                    value={date}
                    onDayChange={this.handleDayChange}
                    dayPickerProps={{
                    selectedDays: date,
                        disabledDays: {
                      // daysOfWeek: [0, 6],
                    },
                    }}
                    /> */}

                    <Input
                    value={this.state.description}
                    onChange={this.handlePostChange}
                    name="description"
                    placeholder="Description"
                    />
                    <Input
                    value={this.state.amount}
                    onChange={this.handlePostChange}
                    name="amount"
                    placeholder="Amount"
                    />

                    <Input
                    value={this.state.date}
                    onChange={this.handlePostChange}
                    name="date"
                    placeholder="date"
                    />
                   <PostButton 
                    handlePostSubmit={this.handlePostSubmit}
                    >
                    </PostButton>
                     <h1> <strong> Welcome {user.firstname}</strong></h1>
                         {' '}
                     <h3> <strong> Current Monthly Income ${user.currentbudget}</strong></h3>
                         {' '}
                     
                     
                     <h3> <strong> Member since: <Moment date={user.createdAt} format="MM/DD/YYYY" /></strong></h3>
                         {' '}
                     <p> <strong> Food: ${food} </strong></p>
                         {' '}
                         <p> <strong> Transportation: ${transportation} </strong></p>
                         {' '}
                         <p> <strong> Lifestyle: ${lifestyle} </strong></p>
                         {' '}
                         <p> <strong> Housing: ${housing} </strong></p>
                         {' '}
                         <p> <strong> Debt: ${debt} </strong></p>
                         {' '}
                         <p> <strong> Insurance: ${insurance} </strong></p>
                         {' '}
                         <p> <strong> Savings: ${savings} </strong></p>
                         {' '}
                         
                          </div> 
                          <div className= "col-md-6"></div>
                        <div className= "col-md-2">  
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

export default Transaction;