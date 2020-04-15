import React from 'react';
import Navbar from './Navbar';
import '../stylesheets/Header.css';

const Header = props => {
  return (
    <div id="header">
      <div id="header-main">
        <div id="header-logo">
          <h1>FFXIV Strategizer</h1>
        </div>
        <div id="header-buttons"></div>
      </div>
      <Navbar />
    </div>
  )
}

export default Header;