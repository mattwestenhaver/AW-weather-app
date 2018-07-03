import React from 'react'
import auth from '../auth.js'

import WeatherWidget from './WeatherWidget.js'

const id = 5368361

class LosAngeles extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      losAngeles: props.losAngeles
    }
  }

  componentDidMount() {
    if(this.props.losAngeles === null) {
      auth.getWeather(id).then(response => {
        console.log('props was null... retrieving state')
        this.setState({
          losAngeles: response.data
        })
      })
    }
  }

  render() {
    return (
      <div>
        <div className='city-sidebar'>
          <h1 className='city-header'>Los Angeles</h1>
          <h2 className='state-header'>California</h2>
          {this.state.losAngeles
            ? <div>
                <h3>{Math.round(this.state.losAngeles.list[0].main.temp * 9/5 - 459.67) + '˚F and ' + this.state.losAngeles.list[0].weather[0].main}</h3>
                <h3>High: {Math.round(this.state.losAngeles.list[0].main.temp_max * 9/5 - 459.67) + '˚F'}</h3>
                <h3>Low: {Math.round(this.state.losAngeles.list[0].main.temp_min * 9/5 - 459.67) + '˚F'}</h3>
                <h3>Humidity: {(this.state.losAngeles.list[0].main.humidity) + '%'}</h3>
                <h3>Wind: {(this.state.losAngeles.list[0].wind.speed * 25/11).toFixed(2) + 'mph'}</h3>
              </div>
            : null
          }
        </div>
        <WeatherWidget weather={this.state.losAngeles} />
      </div>
    )
  }
}

export default LosAngeles