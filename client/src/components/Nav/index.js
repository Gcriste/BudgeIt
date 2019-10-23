import React from "react";
import "./style.css"

function Nav() {
  return (
      <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
              <h2 className="header">Gig Finder</h2>
          </a>
          <div id="navbarNav">
              <ul className="navbar-nav">
                 
                  <li className="nav-item" id="saved">
                      <a className="nav-link" href="/saved">Home</a>
                  </li>
                  <li className="nav-item" id="search">
                      <a className="nav-link" href="/search">Search Gigs</a>
                  </li>
                    <li className="nav-item" id="post">
                      <a className="nav-link" href="/post">Post a Gig</a>
                  </li>
                  {/* {/* <li className="nav-item" id="login">
                      <a className="nav-link" href="/login">Login</a>
                  </li> */}
                  <li className="nav-item" id="incomingrequest">
                      <a className="nav-link" href="/incomingrequest">Incoming Request</a>
                  </li> 
              </ul>
          </div>
      </nav>
  );
}

export default Nav;
