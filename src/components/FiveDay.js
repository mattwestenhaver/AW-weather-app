import React from 'react'

class FiveDay extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentDay: new Date().getDay(),
      day_0: [],
      day_1: [],
      day_2: [],
      day_3: [],
      day_4: [],
      day_5: [],
      day_6: [],
    }
  }

  splitListArray() {
    var sun = []
    var mon = []
    var tue = []
    var wed = []
    var thur = []
    var fri = []
    var sat = []
    this.props.weather.list.forEach(list => {
      if ((new Date(list.dt * 1000).getDay()) === 0) {sun.push(list)}
      if ((new Date(list.dt * 1000).getDay()) === 1) {mon.push(list)}
      if ((new Date(list.dt * 1000).getDay()) === 2) {tue.push(list)}
      if ((new Date(list.dt * 1000).getDay()) === 3) {wed.push(list)}
      if ((new Date(list.dt * 1000).getDay()) === 4) {thur.push(list)}
      if ((new Date(list.dt * 1000).getDay()) === 5) {fri.push(list)}
      if ((new Date(list.dt * 1000).getDay()) === 6) {sat.push(list)}
    })
    this.setState({
      day_0: sun,
      day_1: mon,
      day_2: tue,
      day_3: wed,
      day_4: thur,
      day_5: fri,
      day_6: sat
    })
  }

  componentDidMount() {
    if(this.props.weather) {
      this.splitListArray()
    }
  }

  render() {

    const currentDay = this.state.currentDay

    return(
      <div>
        <h1>Five Day Forecast</h1>
        {this.state.currentDay === 0 && this.state.day_3[0]
          ? <div><h1>{this.state.day_0[0].main.temp}</h1></div>
          : null
        }
        {this.state.currentDay === 1 && this.state.day_3[0]
          ? <div><h1>{this.state.day_1[0].main.temp}</h1></div>
          : null
        }
        {this.state.currentDay === 2 && this.state.day_3[0]
          ? <div><h1>{this.state.day_2[0].main.temp}</h1></div>
          : null
        }
        {this.state.currentDay === 3 && this.state.day_3[0]
          ? <div><h1>{this.state.day_3[0].main.temp}</h1></div>
          : null
        }
        {this.state.currentDay === 4 && this.state.day_3[0]
          ? <div><h1>{this.state.day_4[0].main.temp}</h1></div>
          : null
        }
        {this.state.currentDay === 5 && this.state.day_3[0]
          ? <div><h1>{this.state.day_5[0].main.temp}</h1></div>
          : null
        }
        {this.state.currentDay === 6 && this.state.day_3[0]
          ? <div><h1>{this.state.day_6[0].main.temp}</h1></div>
          : null
        }
      </div>
    )
  }
}

export default FiveDay