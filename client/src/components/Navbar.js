import React from 'react';
import {NavLink} from 'react-router-dom';
import '../stylesheets/Navbar.css';

const Navbar = props => {
  return (
    <div id="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Strategies</NavLink>
      <NavLink to="/">Community</NavLink>
      <NavLink to="/">About</NavLink>
      <NavLink to="/">Contact</NavLink> 
    </div>
  )
}

export default Navbar;