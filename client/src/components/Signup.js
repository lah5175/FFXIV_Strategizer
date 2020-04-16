import React from 'react';
import {connect} from 'react-redux';
import {createNewUser} from '../store';
import '../stylesheets/Signup.css';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      server: '',
      password: '',
      confirmPassword: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleClose() {
    this.props.history.push("/");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createNewUser(this.state);
    this.setState({
      username: '',
      email: '',
      server: '',
      password: '',
      confirmPassword: '',
    })
    this.props.history.push('/');
  }

  render() {
    return (
      <div id="signup-div">
        <h1>Sign Up</h1>

        <form onSubmit={this.handleSubmit} >
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </div>
          
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor="server">Server</label>
            <input type="text" name="server" value={this.state.server} onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
          </div>

          <button type="submit">Submit</button>
          <button type="button" onClick={this.handleClose}>Close</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createNewUser: data => dispatch(createNewUser(data)),
})

export default connect(null, mapDispatchToProps)(Signup);