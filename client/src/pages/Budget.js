import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import setAuthToken from "../utils/setAuthToken";
import {Redirect } from "react-router-dom";
import Moment from 'react-moment';
import Dash from '../components/Dashboard';
import {Input, PostButton} from '../components/Budget';
import axios from 'axios'
import {Link} from 'react-router-dom';


class Budget extends Component {
  state = {
      userid:"",
      user:{},
      budgets:[{}],
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
      this.setState({
        user:response.data,
          userid:response.data._id
      })
      console.log(response.data)

    })
   
  }


  handlePostChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleBudgetSubmit = event => {
    event.preventDefault();
    console.log("hi")
  
  
    API.getUsers()
    .then(response => {
        const savedBudgets = [
            {food:this.state.food},
            {transportation:this.state.transportation},
            {lifestyle:this.state.lifestyle},
            {housing:this.state.housing},
            {debt:this.state.debt},
            {insurance:this.state.insurance},
            {savings:this.state.savings},
            {userid:this.state.userid},
    ]

    this.setState({
        budgets:savedBudgets
    })
        console.log(savedBudgets)
    //    API.saveBudget(savedBudgets)
    axios.put('/api/budgets/' + response.data._id, savedBudgets)
    .then(res=>{
        console.log(res.data)
            this.setState({
        budgets:res.data.budgets,
        redirect:true,
      })
        }
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
                   
                     <h3> <strong> Current Monthly Income ${user.currentbudget}</strong></h3>
                         {' '}
                  
                          </div> 
                          <div className= "col-md-6"></div>
                        <div className= "col-md-2">  
                     <button className = "ui orange animated button" tabIndex ="0"
                     onClick = { this.handleLogout}> 
                     <div className = "visible content">Logout</div>
                      <div className = "hidden content">
                      <i className = "right arrow icon"></i>
                    </div> 
                   </button>
                   </div>
                   </div>
                   <Input
                value={this.state.food}
                onChange={this.handlePostChange}
                name="food"
                placeholder="food"
                />
                   <Input
                value={this.state.transportation}
                onChange={this.handlePostChange}
                name="transportation"
                placeholder="transportation"
                />
                   <Input
                value={this.state.lifestyle}
                onChange={this.handlePostChange}
                name="lifestyle"
                placeholder="lifestyle"
                />
                   <Input
                value={this.state.housing}
                onChange={this.handlePostChange}
                name="housing"
                placeholder="housing"
                />
                   <Input
                value={this.state.debt}
                onChange={this.handlePostChange}
                name="debt"
                placeholder="debt"
                />
                   <Input
                value={this.state.insurance}
                onChange={this.handlePostChange}
                name="insurance"
                placeholder="insurance"
                />
                   <Input
                value={this.state.savings}
                onChange={this.handlePostChange}
                name="savings"
                placeholder="savings"
                />
                 <PostButton 
                handleBudgetSubmit={this.handleBudgetSubmit}
              >

              </PostButton>
                </div>
                </div>
                </div>

             

                     </Container>
       
      )
  }
}



export default Budget;