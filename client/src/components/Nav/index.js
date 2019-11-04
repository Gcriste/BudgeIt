import React from "react";
import "./style.css"

function Nav() {
  return (
      <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
              <h2 className="header">BudgeWiser</h2>
          </a>
          <div id="navbarNav">
              <ul className="navbar-nav">
                 
                  <li className="nav-item" id="dashboard">
                      <a className="nav-link" href="/dashboard">Home</a>
                  </li>
                  <li className="nav-item" id="budget">
                      <a className="nav-link" href="/totalbudget">Total Budgets</a>
                  </li>
                    <li className="nav-item" id="transaction">
                      <a className="nav-link" href="/transaction">Transactions</a>
                  </li>
                  {/* <li className="nav-item" id="currentbudget">
                      <a className="nav-link" href="/currentbudget">Monthly Income</a>
                  </li> */}
              </ul>
          </div>
      </nav>
  );
}

export default Nav;
