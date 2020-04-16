import React from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../stylesheets/Header.css';
import {logOutThunk} from '../store';

class Header extends React.Component {
  constructor() {
    super();

    this.handleLogOut = this.handleLogOut.bind(this);
    this.accessAccount = this.accessAccount.bind(this);
  }

  accessAccount() {
    this.props.history.push(`/users/${this.props.user.id}`);
  }

  handleLogOut() {
    this.props.logOut();
    this.props.history.push('/');
  }

  render() {
    return (
      <div id="header">
        <div id="header-main">
          <div id="header-logo">
            <h1>FFXIV Strategizer</h1>
          </div>
          {
            this.props.isLoggedIn
            ? (
              <div id="header-buttons">
                <button type="button" className="header-button" onClick={this.accessAccount}>Account</button>
                <button type="button" className="header-button" onClick={this.handleLogOut}>Log Out</button>
              </div>
            )
            : (
              <div id="header-buttons">
                <Link className="header-btn" to="/login">Log In</Link>
                <Link className="header-btn" to="/signup">Sign Up</Link>
              </div>
            )
          }
        </div>
        <Navbar />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: !!state.user.id,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOutThunk()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);