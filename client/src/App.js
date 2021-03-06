import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import PrivateRoute from "./utils/PrivateRoute";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import CurrentBudget from './pages/CurrentBudget';
import Budget from './pages/Budget';
import Transaction from './pages/Transaction';
import TotalBudget from './pages/TotalBudget';

function App() {
  return (
   <Router>
      <div>
        <Nav />
        <Switch>
          <PrivateRoute exact path = "/budget" component ={Budget} />
          <Route exact path="/createaccount" component={CreateAccount} /> 
          <PrivateRoute exact path="/transaction" component={Transaction} /> 
          <PrivateRoute exact path="/totalbudget" component={TotalBudget} /> 
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/currentbudget" component={CurrentBudget} />
          <PrivateRoute exact path="/dashboard/:id" component={Dashboard} />
          <Route exact path = "/login" component = {Login}/>
          <Route exact path = "/" component= {Login}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
