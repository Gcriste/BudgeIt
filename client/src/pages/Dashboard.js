import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import setAuthToken from "../utils/setAuthToken";
import {Redirect } from "react-router-dom";
import Moment from 'react-moment';
import Dash from '../components/Dashboard';
import {Link} from 'react-router-dom';





class Dashboard extends Component {
  state = {
      userid:"",
      user:{},
      budgets:{},
      food:"",
      transportation:"",
      lifestyle:"",
      housing:"",
      debt:"",
      insurance:"",
      savings:""
   

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
    if(response.data.length != 0){
    this.setState({
      budgets:response.data,
      food:response.data[0].budgets[0].food,
      transportation:response.data[0].budgets[1].transportation,
      lifestyle:response.data[0].budgets[2].lifestyle,
      housing:response.data[0].budgets[3].housing,
      debt:response.data[0].budgets[4].debt,
      insurance:response.data[0].budgets[5].insurance,
      savings:response.data[0].budgets[6].savings
    })
    }
    else{
      this.setState({
        budgets:{},
        food:"",
        transportation:"",
        lifestyle:"",
        housing:"",
        debt:"",
        insurance:"",
        savings:""
      })
    }
  })



  })
}



  render() {
    


    const {redirect, user, food, transportation, lifestyle, housing, savings, debt, insurance} = this.state;

    if(redirect){
        return <Redirect to="/" />
    }

    if(!user.currentbudget){
      return (
      
      <Link to={"/currentbudget/"} className="ui primary animated button" tabindex="0" >   
      <h3>No budgets entered yet!</h3>
      <div className = "visible content">Enter Monthly Budget </div>
      <div className = "hidden content">
          <i className = "right arrow icon"></i>
      </div>   
      </Link>
)
      
    }
  
    else{
      return (
        <Container>
  
      <div className="card">
        <div className = "profile-container">
         
            <div className = "profile">
                   <div className = "row">
                     <div className = "col-md-4">
                     <h1> <strong> Welcome {user.firstname}</strong></h1>
                         {' '}
                    <h3> <strong> Member since: <Moment date={user.createdAt} format="MM/DD/YYYY" /></strong></h3>
                    {' '}
                     <h3> <strong> Current Monthly Income ${user.currentbudget}</strong></h3>
                         {' '}

                         <a href={"/currentbudget"}>
                            <button className="ui green animated button" tabindex="0">
                                <div className = "visible content">Update Monthly Income </div>
                                <div className = "hidden content">
                                    <i className = "right arrow icon"></i>
                                  </div>      
                                </button>
                                </a>
                           
                     <div className = "card">
                                <div className="card-body player">
                                  <div className="article">
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
                         
                         
                          <a href={"/budget"}>
                            <button className="ui green animated button" tabindex="0">
                                <div className = "visible content">Update Budgets </div>
                                <div className = "hidden content">
                                    <i className = "right arrow icon"></i>
                                  </div>      
                                </button>
                                </a>
                            </div> 
                            </div>
                            </div>
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
}



export default Dashboard;