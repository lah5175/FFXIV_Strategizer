import React from 'react';
import '../stylesheets/Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
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
      <div id="login-div">
        <h1>Log In</h1>

        <form>
          <div>
            <label htmlFor="name">Username or email</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>

          <button type="submit">Submit</button>
          <button type="button" onClick={this.handleClose}>Close</button>
        </form>
      </div>
    )
  }
}

export default Login;