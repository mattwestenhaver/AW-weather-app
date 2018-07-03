import React from 'react'

import WeatherWidget from './WeatherWidget.js'

class Chicago extends React.Component {
  render() {
    return (
      <div>
        <h1>Chicago</h1>
        <WeatherWidget />
      </div>
    )
  }
}

export default Chicago