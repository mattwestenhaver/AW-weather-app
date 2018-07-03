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
      this.setState({ losAngeles: response.data })
    })
    auth.getWeather(ids[1].value).then(response => {
      this.setState({ manhattan: response.data })
    })
    auth.getWeather(ids[2].value).then(response => {
      this.setState({ chicago: response.data })
    })
    auth.getWeather(ids[3].value).then(response => {
      this.setState({ miami: response.data })
    })
    auth.getWeather(ids[4].value).then(response => {
      this.setState({ houston: response.data })
    })
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
            return <CityWeather city={this.state.losAngeles} icon={this.state.losAngeles ? this.state.losAngeles.list[0].weather[0].icon : null} state='CA' {...props} />
          }} />
          <Route path='/manhattan' render={(props) => {
            return <CityWeather city={this.state.manhattan} icon={this.state.manhattan ? this.state.manhattan.list[0].weather[0].icon : null} state='NY' {...props} />
          }} />
          <Route path='/chicago' render={(props) => {
            return <CityWeather city={this.state.chicago} icon={this.state.chicago ? this.state.chicago.list[0].weather[0].icon : null} state='IL' {...props} />
          }} />
          <Route path='/miami' render={(props) => {
            return <CityWeather city={this.state.miami} icon={this.state.miami ? this.state.miami.list[0].weather[0].icon : null} state='FL' {...props} />
          }} />
          <Route path='/houston' render={(props) => {
            return <CityWeather city={this.state.houston} icon={this.state.houston ? this.state.houston.list[0].weather[0].icon : null} state='TX' {...props} />
          }} />
        </div>
      </Router>
    );
  }
}

export default App;
