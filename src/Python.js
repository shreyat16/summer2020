import React, {Component} from 'react';
import './Python.css';
import {Link} from "react-router-dom";
import Message from "./Message";
import travis from "./travis.jpg";
import tictactoecode from "./tictactoecode.jpg";
import tictactoegame from "./tictactoegame.jpg";
import piglatin from "./piglatin.jpg";

class Python extends Component{
  render(){
    return (
      <div className="Python">
        <Message>
          <h1>My Experience with Learning Python</h1>
          <h3>This summer I wanted to learn how to code in Python, so I took a 10-week course in Python programming to learn how. During the program, I learned many of the fundementals of coding in Python. For practice, I coded on repl.it.</h3>
          <h3><a href="https://repl.it/@shreyat/Week-4-HW">View One of my Repl's</a></h3>
          <h3>After the 10-week course, I also started a course on UDEMY to get more practice with coding in Python. </h3>
          <h3>Here is one of the programs I made with that course, where I learned how to use data structures. </h3>
          <img className = "travisimg" src={travis} alt="codepicture" />
          <h3>This is also a simple tic-tac-toe game I coded in Python. </h3>
          <div><img className = "tictactoecode" src={tictactoecode} alt="tictactoecode" /></div>
          <img className = "tictactoegame" src={tictactoegame} alt="tictactoegame" />
          <h3>And this is a pig-latin translator I coded to learn about strings and string functions in Python. </h3>
          <img className = "piglatin" src={piglatin} alt="piglatin" />
          <h2><Link to="/">Return to home</Link></h2>
        </Message>
      </div>
    );
  }
}

export default Python;
