import React from 'react'

import WeatherWidget from './WeatherWidget.js'

class LosAngeles extends React.Component {
  render() {
    return (
      <div>
        <h1>Los Angeles</h1>
        <WeatherWidget />
      </div>
    )
  }
}

export default LosAngeles