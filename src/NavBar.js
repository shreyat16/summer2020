import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className='NavBar'>
        <NavLink exact activeClassName='NavBar-active' to='/'>
          Home
        </NavLink>
        <NavLink exact activeClassName='NavBar-active' to='/candy'>
          Hand Project
        </NavLink>
        <NavLink exact activeClassName='NavBar-active' to='/chips'>
          Python Projects
        </NavLink>
      </div>
    );
  }
}
export default NavBar;
