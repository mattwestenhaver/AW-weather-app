import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import auth from './auth.js'

import MenuBar from './components/MenuBar.js'
import Home from './components/Home.js'
import CityWeather from './components/CityWeather.js'


const ids = [
  {key: 'losAngeles', value: 5368361},
  {key: 'manhattan', value: 5125771},
  {key: 'chicago', value: 4887398},
  {key: 'miami', value: 4164138},
  {key: 'houston', value: 4699066},
]

class App extends Component {

  constructor() {
    super()
    this.state = {
      losAngeles: null,
      manhattan: null,
      chicago: null,
      miami: null,
      houston: null     
    }
  }

  componentDidMount() {
    auth.getWeather(ids[0].value).then(response => {
      this.setState({
        losAngeles: response.data
      })
    })
    // auth.getWeather(ids[1].value).then(response => {
    //   this.setState({
    //     manhattan: response.data
    //   })
    // })
    // auth.getWeather(ids[2].value).then(response => {
    //   this.setState({
    //     chicago: response.data
    //   })
    // })
    // auth.getWeather(ids[3].value).then(response => {
    //   this.setState({
    //     miami: response.data
    //   })
    // })
    // auth.getWeather(ids[4].value).then(response => {
    //   this.setState({
    //     houston: response.data
    //   })
    // })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <MenuBar />
          <Route exact path='/' render={(props) => {
            return <Home losAngeles={this.state.losAngeles} manhattan={this.state.manhattan} chicago={this.state.chicago} miami={this.state.miami} houston={this.state.houston} {...props} />
          }} />
          <Route path='/losangeles' render={(props) => {
            return <CityWeather city={this.state.losAngeles} state='California' {...props} />
          }} />
          <Route path='/manhattan' render={(props) => {
            return <CityWeather city={this.state.manhattan} state='New York' {...props} />
          }} />
          <Route path='/chicago' render={(props) => {
            return <CityWeather city={this.state.chicago} state='Illinois' {...props} />
          }} />
          <Route path='/miami' render={(props) => {
            return <CityWeather city={this.state.miami} state='Florida' {...props} />
          }} />
          <Route path='/houston' render={(props) => {
            return <CityWeather city={this.state.houston} state='Texas' {...props} />
          }} />
        </div>
      </Router>
    );
  }
}

export default App;
