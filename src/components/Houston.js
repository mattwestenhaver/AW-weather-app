import React from 'react'

import WeatherWidget from './WeatherWidget.js'

class Houston extends React.Component {
  render() {
    return (
      <div>
        <h1>Houston</h1>
        <WeatherWidget />
      </div>
    )
  }
}

export default Houston