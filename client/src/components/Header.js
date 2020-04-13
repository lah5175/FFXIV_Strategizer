import React from 'react';
import Navbar from './Navbar';

const Header = props => {
  return (
    <div id="header">
      <div id="header-main">
        <div id="header-logo"></div>
        <div id="header-buttons"></div>
      </div>
      <Navbar />
    </div>
  )
}

export default Header;