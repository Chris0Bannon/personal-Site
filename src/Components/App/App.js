import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
          <p>
            Hello and welcome to my personal Website!
          </p>
      </div>
      <Route exact path = "/"
      component = {Home}/>
      <Route path = "/contact"
      component = {Contact}/>
      <Route path = "/portfolio"
      component = {Portfolio}/>
      </Router>
    );
  }
}

export default App;
