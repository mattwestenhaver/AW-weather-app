import React from 'react'
import auth from '../auth.js'

import WeatherWidget from './WeatherWidget.js'

const ids = [
  {key: 'losAngeles', value: 5368361},
  {key: 'manhattan', value: 5125771},
  {key: 'chicago', value: 4887398},
  {key: 'miami', value: 4164138},
  {key: 'houston', value: 4699066},
]

class CityWeather extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      city: props.city,
      state: props.state
    }
  }

  componentDidMount() {
    if(this.props.city === null) {
      if(this.props.location.pathname === '/losangeles') {
        auth.getWeather(ids[0].value).then(response => {
          this.setState({ city: response.data, state: 'California'})
        })
      } else if(this.props.location.pathname === '/manhattan') {
        auth.getWeather(ids[1].value).then(response => {
          this.setState({ city: response.data, state: 'New York' })
        })
      } else if(this.props.location.pathname === '/chicago') {
        auth.getWeather(ids[2].value).then(response => {
          this.setState({ city: response.data, state: 'Illinois' })
        })
      } else if(this.props.location.pathname === '/miami') {
        auth.getWeather(ids[3].value).then(response => {
          this.setState({ city: response.data, state: 'Florida' })
        })
      } else if(this.props.location.pathname === '/houston') {
        auth.getWeather(ids[4].value).then(response => {
          this.setState({ city: response.data, state: 'Texas' })
        })
      }
    }
  }

  render() {
    return (
      <div>
        <div className='city-sidebar'>
          {/* {this.state.city
            ? <img src={iconSource} alt='weather icon' />
            : null
          } */}
          <h1 className='city-header'>{this.state.city ? this.state.city.city.name : null}</h1>
          <h2 className='state-header'>{this.state.state ? this.state.state : null }</h2>
          {this.state.city
            ? <div>
                <h3>{Math.round(this.state.city.list[0].main.temp * 9/5 - 459.67) + '˚F and ' + this.state.city.list[0].weather[0].main}</h3>
                <h3>High: {Math.round(this.state.city.list[0].main.temp_max * 9/5 - 459.67) + '˚F'}</h3>
                <h3>Low: {Math.round(this.state.city.list[0].main.temp_min * 9/5 - 459.67) + '˚F'}</h3>
                <h3>Humidity: {(this.state.city.list[0].main.humidity) + '%'}</h3>
                <h3>Wind: {(this.state.city.list[0].wind.speed * 25/11).toFixed(2) + 'mph'}</h3>
              </div>
            : null
          }
        </div>
        <WeatherWidget weather={this.state.city} />
      </div>
    )
  }
}

export default CityWeather