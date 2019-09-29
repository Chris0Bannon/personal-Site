import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello and welcome to my personal Website!
          </p>
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
