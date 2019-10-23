import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import PrivateRoute from "./utils/PrivateRoute";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
   <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/createaccount" component={CreateAccount} /> 
          <PrivateRoute exact path="/saved" component={Saved} />
          <PrivateRoute exact path="/saved/:id" component={Saved} />
          <Route exact path = "/login" component = {Login}/>
          <Route exact path = "/" component= {Login}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
