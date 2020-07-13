import React, {Component} from 'react';
import './Hand.css';
import {Link} from "react-router-dom";

class Hand extends Component{
  render(){
    return (
      <div className="hand">
        <h1>hand page</h1>
        <h1><Link to="/">go back!</Link></h1>
      </div>
    );
  }
}

export default Hand;
