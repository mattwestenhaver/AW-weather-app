import React from 'react'

import WeatherWidget from './WeatherWidget.js'

class Miami extends React.Component {
  render() {
    return (
      <div>
        <h1>Miami</h1>
        <WeatherWidget />
      </div>
    )
  }
}

export default Miami