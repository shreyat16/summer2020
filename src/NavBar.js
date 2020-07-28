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
        <NavLink exact activeClassName='NavBar-active' to='/hand'>
          Hand Project
        </NavLink>
        <NavLink exact activeClassName='NavBar-active' to='/python'>
          My Experience Learning Python
        </NavLink>
      </div>
    );
  }
}
export default NavBar;
