import React from 'react'
import { Button } from 'semantic-ui-react'

import NextDay from './NextDay.js'
import FiveDay from './FiveDay.js'

class WeatherWidget extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      nextDay: true,
      weather: props.weather
    }
  }

  display24Hours() {
    this.setState({ nextDay: true })
  }
  
  display5Day() {
    this.setState({ nextDay: false })
  }

  render() {
    return (
      <div className='weather-widget'>
        <Button onClick={this.display24Hours.bind(this)}>24 Hour Forecast</Button>
        <Button onClick={this.display5Day.bind(this)}>5 Day Forecast</Button>
        <hr />
        {this.state.nextDay
          ? <NextDay weather={this.props.weather} />
          : <FiveDay weather={this.props.weather} />
        }
      </div>
    )
  }
}

export default WeatherWidget