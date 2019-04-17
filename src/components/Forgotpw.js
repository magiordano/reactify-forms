import React from 'react';
import {API_URL} from '../config';

class Forgotpw extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      accountname: '',
      password:''
    }
      
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    fetch(`${API_URL}/users`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(this.state)
    })
    console.log(this.state)
  }

render(){

    return(  
        <div>
          <h1>Reset Password</h1>
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Account Name" name="Account-Name" onChange={event => this.setState({accountname: event.target.value})} required maxLength="30"></input><br />
        <input type="password" placeholder="New Password" name="password"onChange={event => this.setState({password: event.target.value})} required maxLength="15"></input><br />
        <input type="submit" value="Submit"></input>
        <input type="reset" value="Reset"></input>
      </form>
    </div>
    );
}

}
export default Forgotpw