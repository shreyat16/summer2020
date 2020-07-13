import React, {Component} from 'react';
import './App.css';
import {Route,Switch} from "react-router-dom";
import NavBar from './NavBar';
import HomePage from './HomePage'
import Hand from './Hand'
import Python from './Python'

class App extends Component{
  render(){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" render={() => <HomePage />}/>
          <Route exact path="/hand" render={() => <Hand />}/>
          <Route exact path="/python" render={() => <Python />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
