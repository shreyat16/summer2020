import React, {Component} from 'react';
import './Hand.css';
import {Link} from "react-router-dom";
import Message from "./Message";

class Hand extends Component{
  render(){
    return (
      <div className="Hand">
        <Message>
          <h1>hand page</h1>
          <h2><Link to="/">Return to home</Link></h2>
        </Message>
      </div>
    );
  }
}

export default Hand;
