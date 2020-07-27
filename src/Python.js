import React, {Component} from 'react';
import './Python.css';
import {Link} from "react-router-dom";
import Message from "./Message";

class Python extends Component{
  render(){
    return (
      <div className="Python">
        <Message>
          <h1>My Experience with Learning Python</h1>
          <h2><Link to="/">Return to home</Link></h2>
        </Message>
      </div>
    );
  }
}

export default Python;
