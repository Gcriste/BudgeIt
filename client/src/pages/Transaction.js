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
import 'react-day-picker/lib/style.css'

class Transaction extends Component {

    constructor(props) {
        super(props);
        this.handleDayChange = this.handleDayChange.bind(this);
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




  API.getTransactionByUser(userId)
  .then(res => {
    let results = res.data
    console.log(res.data)
    // map through the array of transactions
    results = results.map(result => {
        //store each gig information in a new object 
        result = {
            id: result._id,
            amount: result.amount,
            budgetid: result.budgetid,
            category: result.category,
            date: result.date,
            description:result.description,
            userid:result.userid
        }
      
        return result;
    })

   
    this.setState({ 
      transactions: results, 
      error: "" })

  })

  })

  }

handlePostChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleDayChange(date, modifiers, dayPickerInput) {
    const input = dayPickerInput.getInput();
    this.setState({
      date,
      isEmpty: !input.value.trim(),
      isDisabled: modifiers.disabled === true,
    });
  }
  
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
     })
      )
    .catch(err => console.log(err));
   }


   handleDeleteButton = id => {
    API.deleteTransaction(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
}


  render() {
    


    const {redirect, user, date} = this.state;

    if(redirect){
        return <Redirect to="/totalbudget" />
    }
  
      return (
        <Container>
  
        
      <div className="card">
        <div className = "profile-container">
         
            <div className = "profile">
                   <div className = "row">

                     <div className = "col-md-4">
                       <h1> Enter New Transaction</h1>
                       <DayPickerInput
                    value={date}
                    onDayChange={this.handleDayChange}
                    dayPickerProps={{
                    selectedDays: date,
                        disabledDays: {
                      // daysOfWeek: [0, 6],
                    },
                    }}
                    />
                     <Category
                    value={this.state.category}
                    onChange={this.handlePostChange}
                    name="category"
                    placeholder="Years of Experience"
                    />
                    <br></br>
                   
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
                 
              <br></br><br></br><br></br><br></br><br></br>
                   <PostButton 
                    handlePostSubmit={this.handlePostSubmit}
                    >

                    </PostButton>

                    </div>
                    <div className = "col-md-6">
                    <PrintTransaction   transactions ={this.state.transactions}
                     handleDeleteButton={this.handleDeleteButton} />
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

export default Transaction;