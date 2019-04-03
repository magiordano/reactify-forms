import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Forgotpw from './Forgotpw';
import Signup from './Signup';
import Login from './Login';


function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Sign Up</a>
            </li>
            <li>
              <a href="/Login/">Login</a>
            </li>
            <li>
              <a href="/Forgotpw/">Forgot Password</a>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Signup} />
        <Route path="/Login/" component={Login} />
        <Route path="/Forgotpw/" component={Forgotpw} />
      </div>
    </Router>


  );
  
 
  }
export default AppRouter;