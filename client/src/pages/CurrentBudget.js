import React, { Component } from "react";
import axios from "axios";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import {Redirect } from "react-router-dom";
import authenticate from '../utils/Authenticate';
import setAuthToken from '../utils/setAuthToken';
import Dash from '../components/Dashboard';
import Moment from 'react-moment'
import {Current , PostButton } from '../components/CurrentBudget';



class CurrentBudget extends Component {
  

    // state = {
    //     user:{},
    //     userid:"",
    //     currentbudget:""
    // }
    constructor(){
        super();
        this.state = {
          redirect:false,
            currentbudget:"",
            user:{},
            userid:"",
            errors:{},
            lastname:"",
            email:"",
            password:"",
            firstname:""
        }
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
     
      this.setState({
        user:response.data,
          userid:response.data._id,
          firstname:response.data.firstname,
          lastname:response.data.lastname,
          email:response.data.email,
          password:response.data.password
      })

   
    })

  }

  handleCurrentBudgetChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
 
  handleCurrentBudgetSubmit = event => {
    event.preventDefault();
    console.log("hi")
  
  
    API.getUsers()
    .then(response => {
        const newBudget = {
            currentbudget:this.state.currentbudget,
       
           }
       this.setState({
         user:response.data,
           userid:response.data._id,
           firstname:response.data.firstname,
           lastname:response.data.lastname,
           email:response.data.email,
           password:response.data.password
       })
       axios.put('/api/users/' + response.data._id, newBudget)
       .then(this.setState({
           currentbudget:this.state.currentbudget,
           redirect:true,
         })
       
       )
    
    
  
    .catch(err => {
      this.setState({
        errors:err.response.data
      })
    });
    })
   }



  render() {
    


    const {redirect, user} = this.state;

    if(redirect){
        return <Redirect to="/dashboard" />
    }
  
      return (
        <Container>
  
      <div className="card">
        <div className = "profile-container">
         
  <div className = "profile">


                   <div className = "row">
                     <div className = "col-md-4">
                    
                     <h2> <strong> Current Monthly Income ${user.currentbudget}</strong></h2>
                         {' '}
                     
                          <Current
                          value={this.state.currentbudget}
                          type="name"
                          onChange={this.handleCurrentBudgetChange}
                          name="currentbudget"
                          placeholder="Enter Your Monthly Income"
                        />
                        
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
                   <PostButton 
                    handleCurrentBudgetSubmit={this.handleCurrentBudgetSubmit}>
                  </PostButton>
                </div>
                </div>

              </div>
            

                     </Container>
       
      )
  }
}



export default CurrentBudget;