import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Navigation from './components/Navigation'
import Experience from './components/Experience'

class App extends Component {
  
  scrollToHome = () => {
    window.scrollTo(0, 0);
  }
  scrollToExperience = () => {
    window.scrollTo(0, 740);
  }
  scrollToSkills = () => {
    window.scrollTo(0, 1400);
  }
  scrollToProjects = () => {
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
