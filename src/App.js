import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MenuBar from './components/MenuBar.js'
import Home from './components/Home.js'
import LosAngeles from './components/LosAngeles.js'
import Manhattan from './components/Manhattan.js'
import Chicago from './components/Chicago.js'
import Miami from './components/Miami.js'
import Houston from './components/Houston.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MenuBar />
          <Route exact path='/' component={Home} />
          <Route path='/losangeles' component={LosAngeles} />
          <Route path='/manhattan' component={Manhattan} />
          <Route path='/chicago' component={Chicago} />
          <Route path='/miami' component={Miami} />
          <Route path='/houston' component={Houston} />
        </div>
      </Router>
    );
  }
}

export default App;
