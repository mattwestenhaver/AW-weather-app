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
        <Button color='blue' onClick={this.display24Hours.bind(this)}>Next 24 Hours</Button>
        <Button color='teal' onClick={this.display5Day.bind(this)}>Next 5 Days</Button>
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