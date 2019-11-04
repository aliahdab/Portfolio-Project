import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Navigation from './components/Navigation'
import Experience from './components/Experience'
import firebaseData from './components/Firebase'

class App extends Component {
  
  scrollToHome = () => {
    window.history.pushState(null, null, 'home');
    window.scrollTo(0, 0);
  }
  scrollToExperience = () => {
    window.history.pushState(null, null, 'experience');
    window.scrollTo(0, 720);
  }
  scrollToSkills = () => {
    window.history.pushState(null, null, 'skills');
    window.scrollTo(0, 1400);
  }
  scrollToProjects = () => {
    window.history.pushState(null, null, 'projects');
    window.scrollTo(0, 2100);
  }

  render() {
    return (
      <div className="App">
        <Navigation scrollToHome = {this.scrollToHome} scrollToExperience = {this.scrollToExperience} scrollToSkills = {this.scrollToSkills} scrollToProjects = {this.scrollToProjects}></Navigation>
        <Home></Home>
        <Experience ></Experience>
      </div>
    )

  }
}

export default App;
