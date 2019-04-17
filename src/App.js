import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Forgotpw from './components/Forgotpw';
import Signup from './components/Signup';
import Login from './components/Login';
import ReadUsers from './components/ReadUsers';

function App() {
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
            <li>
              <a href="/ReadUsers/">Read Users</a>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Signup} />
        <Route path="/Login/" component={Login} />
        <Route path="/Forgotpw/" component={Forgotpw} />
        <Route path="/ReadUsers/" component={ReadUsers} />
      </div>
    </Router>

  );
  }
export default App