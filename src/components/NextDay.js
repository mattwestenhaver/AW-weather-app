import React from 'react'

class NextDay extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      weather: props.weather
    }
  }

  render() {

    var weatherList = this.props.weather ? this.props.weather.list.slice(1, 8) : null

    return(
      <div className='daily-container'>
        {weatherList !== null
          ? weatherList.map((list, index) => {
              return(
                <div className='daily-cards' key={index}>
                  {new Date(list.dt * 1000).getHours() > 11
                    ? <h3>{(new Date(list.dt * 1000).getHours() - 12)  + ':00 PM'}</h3>
                    : <h3>{new Date(list.dt * 1000).getHours() + ':00 AM'}</h3>
                  }
                  
                  {/* {this.props.weather.city.name === "Los Angeles"
                    ? (new Date(list.dt * 1000).getHours() - 3) > 11
                      ? <h3>{(new Date(list.dt * 1000).getHours() - 15)  + ':00 PM'}</h3>
                      : <h3>{(new Date(list.dt * 1000).getHours() - 3) + ':00 AM'}</h3>
                    : null
                  }
                  {this.props.weather.city.name === "Manhattan" || this.props.weather.city.name === "Miami"
                    ? new Date(list.dt * 1000).getHours() > 11
                      ? <h3>{(new Date(list.dt * 1000).getHours() - 12)  + ':00 PM'}</h3>
                      : <h3>{(new Date(list.dt * 1000).getHours()) + ':00 AM'}</h3>
                    : null
                  }
                  {this.props.weather.city.name === "Chicago" || this.props.weather.city.name === "Houston"
                    ? (new Date(list.dt * 1000).getHours() - 2) > 11
                      ? <h3>{(new Date(list.dt * 1000).getHours() - 14)  + ':00 PM'}</h3>
                      : <h3>{(new Date(list.dt * 1000).getHours() - 2) + ':00 AM'}</h3>
                    : null
                  } */}

                  <hr />
                  <h4>{Math.round(list.main.temp * 9/5 - 459.67) + '˚F and ' + list.weather[0].main}</h4>
                  <h4>High: {Math.round(list.main.temp_max * 9/5 - 459.67) + '˚F'}</h4>
                  <h4>Low: {Math.round(list.main.temp_min * 9/5 - 459.67) + '˚F'}</h4>
                  <h4>Humidity: {(list.main.humidity) + '%'}</h4>
                  {list.rain && list.rain['3h']
                    ? <h4>Rain: {(list.rain['3h'] / 25.4).toFixed(2)} inches</h4>
                    : <h4>No Rain</h4>
                  }
                </div>
              )
            })
          : null
        }
      </div>
    )
  }
}

export default NextDay