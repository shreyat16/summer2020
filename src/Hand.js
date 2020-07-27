import React, {Component} from 'react';
import './Hand.css';
import {Link} from "react-router-dom";
import Message from "./Message";
import drawings1 from "./drawings1.jpg";
import drawings2 from "./drawings2.jpg";
import materials from "./materials.jpg";
import list from "./list.jpg";

class Hand extends Component{
  render(){
    return (
      <div className="Hand">
        <Message>
          <h1 className="HandTitle">My Prosthetic Hand Project</h1>
          <h3>I was able to do this project with the help of the LN4 Hand Project, which provides free mechanical prosthetic hands to amputees.</h3>
          <h3>A branch of bioengineering I have always been interested in is prosthetics. My honors mini-grant gave me the opportunity to work with this 
            organization to build a hand for an amputee, while also taking this as a learning opportunity for me to learn more about prosthetics.</h3>
          <h3>For my project, I built a prosthetic hand using the kit provided by the LN4 Hand Project. To make this a bigger project, I also modeled the prosthetic hand using CAD software, and did research on how prosthetics are designed and built.</h3>
          <h3><a href="https://www.ln4handproject.org/">Learn more about the LN4 Hand Project</a></h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/GBztW1GoqLg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div>
            <h3>Materials:</h3>
          <img className = "materialsimg" src={materials} alt="materials" />
          </div>
          
          <img className = "listimg" src={list} alt="list" />
          <div><h3>Drawings:</h3>
          <img className = "drawings1img" src={drawings1} alt="drawings" />
          </div>
          
          <img className = "drawings2img" src={drawings2} alt="drawings" />
          <h2><Link to="/">Return to home</Link></h2>
        </Message>
      </div>
    );
  }
}

export default Hand;
