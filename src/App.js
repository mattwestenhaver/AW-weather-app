import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MenuBar from './components/MenuBar.js'
import Home from './components/Home.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MenuBar />
          <Route exact path='/' component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
