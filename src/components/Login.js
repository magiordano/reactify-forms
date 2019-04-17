import React from 'react';
import {API_URL} from '../config'

class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      accountname: '',
      password: ''};
      
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleSubmit(event) {
    event.preventDefault()
    fetch(`${API_URL}/login`,
    {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
          .then((response) => response.json())
          .then(response =>{ 
            if(response === true) {
              window.alert("Welcome " + this.state.accountname);
            }
            else{
              window.alert("Incorrect Login Information")
            }
            })



          // .catch(error => console.error('Error:', error));

         
  }

render(){
    return(     
    <div>
    <h1>Login</h1>
    <form onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Account Name" name="account-name" onChange={event => this.setState({accountname: event.target.value})} required maxLength="30"></input><br />
      <input type="password" placeholder="Password" name="password"onChange={event => this.setState({password: event.target.value})} required maxLength="15"></input><br />
      <input type="submit" value="Submit"></input>
      <input type="reset" value="Reset"></input>
    </form>
    </div>
    );  
}
}

export default Login