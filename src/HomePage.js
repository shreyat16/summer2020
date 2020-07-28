import React, {Component} from 'react';
import './HomePage.css';
import {Link} from "react-router-dom";
import Message from "./Message"
 
class HomePage extends Component{
  render(){
    return (
      <div className="HomePage">
        <Message>
          <h1 className="title">Shreya Thammana's Honors Mini-Grant</h1>
          <h1>This summer, I recieved an Honors Mini-Grant from the Calhoun Honors College. </h1>
          <h2>
              The purpose of this Honors Mini-Grant was to allow me to work on a personal project for my academic and intellectual development. 
              I took this opportunity to focus on and enhance my skills and knowledge in two disciplines I have always been interested in.
          </h2>
          <h3>
            I am a bioengineering major, and one of the areas of bioengineering that I wanted to learn more about is prosthetics. 
            In the future, I hope to help others who are physically challenged through the use of technology, and this is what draws me to the field of prosthetics. 
            I am interested in researching more about prosthetics, so I took this summer to learn about the physics and engineering behind how prosthetics are made, and what different materials are used in their manufacturing. 
            I took the Engineering 2080 class at Clemson last semester where I learned how to design parts and assemble complex machines in SolidWorks, so I also looked into the mechanical side of designing prosthetic machinery. 
            In addition to reading academic journals about this subject, I used my grant to build a prosthetic appendage through the LN-4 Hand Project. 
            The hand that I assembled will be tested and sent to an amputee in a developing country. 
            Many people in developing countries have been injured due to factory accidents or landmine hazards. 
            Building this hand not only enriched my educational experience and knowledge with prosthetics, but it also allowed me to give a hand to someone who needs one. 
          </h3>
          <h2><Link to="/hand">Read more about my prosthetic hand project</Link></h2>
          <h3>I am also pursuing a Computer Science minor. 
            Last semester at Clemson, I took an Intro to Computer Science class, where I learned how to program in C. 
            I found this class very interesting because I had never done a computer science course before.
            Also, in my engineering class last semester, I learned how to program in MATLAB.
            In additon, this summer I attended TRACE Camp, where I learned how to make interactive websites using the React and Gatsby frameworks.
            I’ve discovered that I am passionate about learning how to program, which leads me to the second part of my grant.
          </h3>
          <h3>
            This summer, I also wanted to use my time to take a course for learning how to code in Python. 
            Since I already know some of the foundational concepts of programming, I wanted to try my hand at programming in Python. 
            Python interests me because it is one of the most popular programming languages.
            Learning programming skills will complement my engineering career because nowadays advancement in engineering is only made possible with computer science knowledge. 
            Using my grant, I was able to attend a 10-week online course for programming in Python, where I learned the basics of coding in Python.
          </h3>
          <h2><Link to="/python">Read more about my experience with learning Python</Link></h2>
          <h2>
            This summer, I wanted to use the time I had to learn more about subjects I’m interested in. 
            This Honors Mini-Grant was the perfect opportunity for me to do that.
          </h2>
        </Message>
      </div>
    );
  }
}

export default HomePage;
