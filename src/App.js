import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import firebase from 'firebase';
import Navigation from './components/Navigation';
import Experience from './components/Experience';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Skills from './components/Skills';
import Projects from './components/Projects.js';
import Admin from './components/Admin.js';
import { init as firebaseInit } from './components/config/firebase'


class App extends Component {
  constructor(props) {
    super(props)
    firebaseInit()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation></Navigation>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/experience" component={Experience} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/admin" component={Admin} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>

    )
  }
}

export default App;
