import React from 'react'
import auth from '../auth.js'
import { Image } from 'semantic-ui-react'

import WeatherWidget from './WeatherWidget.js'
import laThumbnail from '../images/la.jpg'
import manhattanThumbnail from '../images/manhattan.jpg'
import chicagoThumbnail from '../images/chicago.jpg'
import miamiThumbnail from '../images/miami.jpg'
import houstonThumbnail from '../images/houston.jpg'

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
      state: props.state,
      icon: `http://openweathermap.org/img/w/${props.icon}.png`
    }
  }

  componentDidMount() {
    if(this.props.city === null) {
      if(this.props.location.pathname === '/losangeles') {
        auth.getWeather(ids[0].value).then(response => {
          this.setState({ city: response.data, state: 'CA', icon: `http://openweathermap.org/img/w/${response.data.list[0].weather[0].icon}.png` })
        })
      } else if(this.props.location.pathname === '/manhattan') {
        auth.getWeather(ids[1].value).then(response => {
          this.setState({ city: response.data, state: 'NY', icon: `http://openweathermap.org/img/w/${response.data.list[0].weather[0].icon}.png` })
        })
      } else if(this.props.location.pathname === '/chicago') {
        auth.getWeather(ids[2].value).then(response => {
          this.setState({ city: response.data, state: 'IL', icon: `http://openweathermap.org/img/w/${response.data.list[0].weather[0].icon}.png` })
        })
      } else if(this.props.location.pathname === '/miami') {
        auth.getWeather(ids[3].value).then(response => {
          this.setState({ city: response.data, state: 'FL', icon: `http://openweathermap.org/img/w/${response.data.list[0].weather[0].icon}.png` })
        })
      } else if(this.props.location.pathname === '/houston') {
        auth.getWeather(ids[4].value).then(response => {
          this.setState({ city: response.data, state: 'TX', icon: `http://openweathermap.org/img/w/${response.data.list[0].weather[0].icon}.png` })
        })
      }
    }
  }

  render() {
    return (
      <div>
        <div className='city-sidebar'>
          {this.state.city && this.state.city.city.name === 'Los Angeles' ? <Image className='sidebar-image' src={laThumbnail} /> : null}
          {this.state.city && this.state.city.city.name === 'Manhattan' ? <Image className='sidebar-image' src={manhattanThumbnail} /> : null}
          {this.state.city && this.state.city.city.name === 'Chicago' ? <Image className='sidebar-image' src={chicagoThumbnail} /> : null}
          {this.state.city && this.state.city.city.name === 'Miami' ? <Image className='sidebar-image' src={miamiThumbnail} /> : null}
          {this.state.city && this.state.city.city.name === 'Houston' ? <Image className='sidebar-image' src={houstonThumbnail} /> : null}
          <h1 className='city-header'>{this.state.city ? this.state.city.city.name : null}, {this.state.state ? this.state.state : null }</h1><hr />
          {this.state.city
            ? <div className='sidebar-weather'>
                {/* {this.state.icon
                  ? <img src={this.state.icon} alt='weather icon' className='icon-sidebar' />
                  : null
                } */}
                <h4>Currently:</h4>
                <h2>{Math.round(this.state.city.list[0].main.temp * 9/5 - 459.67) + '˚F and ' + this.state.city.list[0].weather[0].main}</h2>
                <hr />
                <h3>High: {Math.round(this.state.city.list[0].main.temp_max * 9/5 - 459.67) + '˚F'}/Low: {Math.round(this.state.city.list[0].main.temp_min * 9/5 - 459.67) + '˚F'}</h3>
                <h3>Humidity: {(this.state.city.list[0].main.humidity) + '%'}</h3>
                <h3>Wind: {(this.state.city.list[0].wind.speed * 25/11).toFixed(2) + 'mph'}</h3>
                {this.state.city.list[0].rain && this.state.city.list[0].rain['3h'] && (this.state.city.list[0].rain['3h'] / 25.4).toFixed(2) >= 0.01
                  ? <h3>Rain: {(this.state.city.list[0].rain['3h'] / 25.4).toFixed(2)} inches</h3>
                  : <h3>No Rain</h3>
                }
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