import React from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import '../stylesheets/Header.css';

const Header = props => {
  return (
    <div id="header">
      <div id="header-main">
        <div id="header-logo">
          <h1>FFXIV Strategizer</h1>
        </div>
        <div id="header-buttons">
          <Link className="header-btn" to="/login">Log In</Link>
          <Link className="header-btn" to="/signup">Sign Up</Link>
        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default Header;