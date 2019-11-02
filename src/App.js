import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Navigation from './components/Navigation'
import Experience from './components/Experience'

class App extends Component {

  render() {
    return (

      <div className="App">
        <Navigation></Navigation>
        <Home></Home>
        <Experience></Experience>
      </div>
    )

  }
}

export default App;
