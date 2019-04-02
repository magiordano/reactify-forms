import React from 'react';


class Signup extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      dob: '',
      email: '',
      password: '',
      };
      
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    console.log("First Name: " + this.state.firstname + " Last Name: " + this.state.lastname + " dob: " + this.state.dob + " email: " + this.state.email + " password: " + this.state.password);
    event.preventDefault();
  }
render(){

    return(  
        <div>
  <h1>New Account</h1>
  <form onSubmit={this.handleSubmit}>
    <input type="text" placeholder="First Name" name="first-name"onChange={event => this.setState({firstname: event.target.value})} required maxLength="15"></input><br />
    <input type="text" placeholder="Last Name" name="last-name"onChange={event => this.setState({lastname: event.target.value})} required maxLength="15"></input><br />
    <input type="date" placeholder="mm/dd/yyyy" name="birthday" onChange={event => this.setState({dob: event.target.value})}></input><br />
    <input type="text" placeholder="Email" name="email"onChange={event => this.setState({email: event.target.value})} required maxLength="30"></input><br />
    <input type="password" placeholder="Password" name="password"onChange={event => this.setState({password: event.target.value})} required maxLength="15"></input><br />
    <input type="password" placeholder="Confirm Password" name="pwconfirm" required maxLength="15"></input><br />
    <input type="submit" value="Submit"></input>
    <input type="reset" value="Reset"></input>

  </form>
    </div>
    );
}
}

export default Signup