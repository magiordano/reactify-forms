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
              <Link to="/">Sign Up</Link>
            </li>
            <li>
              <Link to="/Login/">Login</Link>
            </li>
            <li>
              <Link to="/Forgotpw/">Forgot Password</Link>
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