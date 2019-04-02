import React from 'react';


class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''};
      
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    console.log("email: " + this.state.email + " password:  " + this.state.password);
    event.preventDefault();
  }
render(){
    return(     
    <div>
    <h1>Login</h1>
    <form onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Email" name="Email" onChange={event => this.setState({email: event.target.value})} required maxLength="30"></input><br />
      <input type="password" placeholder="Password" name="password"onChange={event => this.setState({password: event.target.value})} required maxLength="15"></input><br />
      <input type="submit" value="Submit"></input>
      <input type="reset" value="Reset"></input>
    </form>
    </div>
    );  
}
}

export default Login