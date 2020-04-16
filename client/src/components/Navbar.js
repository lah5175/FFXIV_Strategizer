import React from 'react';
import {NavLink} from 'react-router-dom';
import '../stylesheets/Navbar.css';

const Navbar = props => {
  return (
    <div id="navbar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/strategies">Strategies</NavLink>
      <NavLink to="/community">Community</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink> 
    </div>
  )
}

export default Navbar;