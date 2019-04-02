import React from 'react';


class Forgotpw extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      dob: ''};
      
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    console.log("email: " + this.state.email + " dob: " + this.state.dob);
    event.preventDefault();
  }
render(){

    return(  
        <div>
          <h1>Reset Password</h1>
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Email" name="Email" onChange={event => this.setState({email: event.target.value})} required maxLength="30"></input><br />
        <input type="date" placeholder="mm/dd/yyyy" name="birthday" onChange={event => this.setState({dob: event.target.value})}></input><br />
        <input type="submit" value="Submit"></input>
        <input type="reset" value="Reset"></input>
      </form>
    </div>
    );
}
}

export default Forgotpw