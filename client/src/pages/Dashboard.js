import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import setAuthToken from "../utils/setAuthToken";
import {Redirect } from "react-router-dom";
import Moment from 'react-moment';
import Dash from '../components/Dashboard';





class Dashboard extends Component {
  state = {
      userid:"",
      user:{},
      budgets:{}
   

  };


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
      budgets:response.data[0]
    })
  })



  })
}



  render() {
    


    const {redirect, user, budgets } = this.state;

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
                     <h1> <strong> Welcome {user.firstname}</strong></h1>
                         {' '}
                     <h3> <strong> Current Monthly Income {user.currentbudget}</strong></h3>
                         {' '}
                     
                     
                     <h3> <strong> Member since: <Moment date={user.createdAt} format="MM/DD/YYYY" /></strong></h3>
                         {' '}
                     <p> <strong> Food: {budgets.food} </strong></p>
                         {' '}
                         <p> <strong> Transportation: {budgets.transportation} </strong></p>
                         {' '}
                         <p> <strong> Lifestyle: {budgets.lifestyle} </strong></p>
                         {' '}
                         <p> <strong> Housing: {budgets.housing} </strong></p>
                         {' '}
                         <p> <strong> Debt: {budgets.debt} </strong></p>
                         {' '}
                         <p> <strong> Insurance: {budgets.insurance} </strong></p>
                         {' '}
                         <p> <strong> Savings: {budgets.savings} </strong></p>
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



export default Dashboard;