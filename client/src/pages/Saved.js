import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import setAuthToken from "../utils/setAuthToken";
import {Redirect } from "react-router-dom";
import Moment from 'react-moment';





class Saved extends Component {
  state = {
      savedGigs:[],
      userid:"",
      savedRequests:[],
      gigid:"",
      user:{},
      dateForSavedRequests:[],
      // activeTab: props.activeTab || 1

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
     
      this.setState({
        user:response.data,
          userid:response.data._id
      })

   
    })

  }


  render() {
    


    const {redirect, user} = this.state;

    if(redirect){
        return <Redirect to="/" />
    }
  
      return (
        <Container>
  

      <div className="card">
        <div className = "profile-container">
         
  <div className = "profile">
                   <div className = "row">
                     <div className = "col-md-4">
                     <h1> <strong> Welcome {user.firstname}</strong></h1>
                         {' '}
                     {/* <h3> <strong> Email Address {user.email}</strong></h3>
                         {' '}
                      */}
                     
                     <h3> <strong> Member since: <Moment date={user.createdAt} format="MM/DD/YYYY" /></strong></h3>
                         {' '}
                     {/* <p> <strong> Last Updated: <Moment date={user.updatedAt} format="MM/DD/YYYY" /></strong></p>
                         {' '} */}
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



export default Saved;