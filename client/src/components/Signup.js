import React from 'react';
import '../stylesheets/Signup.css';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleClose() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div id="signup-div">
        <h1>Sign Up</h1>

        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={this.state.username} handleChange={this.handleChange} />
          </div>
          
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={this.state.email} handleChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={this.state.password} handleChange={this.handleChange} />
          </div>
          
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" value={this.state.confirmPassword} handleChange={this.handleChange} />
          </div>

          <button type="submit">Submit</button>
          <button type="button" onClick={this.handleClose}>Close</button>
        </form>
      </div>
    )
  }
}

export default Signup;