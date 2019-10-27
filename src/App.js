import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Navigation from './components/Navigation'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <Home></Home>
      </div>
    )
  }
}

export default App;