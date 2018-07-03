import React from 'react'

import WeatherWidget from './WeatherWidget.js'

class Manhattan extends React.Component {
  render() {
    return (
      <div>
        <h1>Manhattan</h1>
        <WeatherWidget />
      </div>
    )
  }
}

export default Manhattan