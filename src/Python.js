import React, {Component} from 'react';
import './Python.css';
import {Link} from "react-router-dom";

class Python extends Component{
  render(){
    return (
      <div className="Python">
        <h1>python page</h1>
        <h1><Link to="/">go back!</Link></h1>
      </div>
    );
  }
}

export default Python;
