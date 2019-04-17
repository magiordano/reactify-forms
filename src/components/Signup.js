import React from 'react';
import {API_URL} from '../config'

class Signup extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      accountname: '',
      password: '',
    //  dob: '',
    //  email: '',
    //  password: '',
      };
      
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    //event.preventDefault()
   // window.reload();
    fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(this.state)
    })
  }

render(){

    return(  
        <div>
  <h1>New Account</h1>
  <form onSubmit={this.handleSubmit}>
    <input type="text" placeholder="New Account Name" name="account-name"onChange={event => this.setState({accountname: event.target.value})} required maxLength="15"></input><br />
    <input type="password" placeholder="Password" name="password"onChange={event => this.setState({password: event.target.value})} required maxLength="15"></input><br />
    {/* <input type="date" placeholder="mm/dd/yyyy" name="birthday" onChange={event => this.setState({dob: event.target.value})}></input><br />
    <input type="text" placeholder="Email" name="email"onChange={event => this.setState({email: event.target.value})} required maxLength="30"></input><br />
    <input type="password" placeholder="Password" name="password"onChange={event => this.setState({password: event.target.value})} required maxLength="15"></input><br />
    <input type="password" placeholder="Confirm Password" name="pwconfirm" required maxLength="15"></input><br />
    */<input type="submit" value="Submit"></input>}
    <input type="reset" value="Reset"></input>

  </form>
    </div>
    );
}
}

export default Signup