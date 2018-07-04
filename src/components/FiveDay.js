import React from 'react'

var sun = []
var mon = []
var tue = []
var wed = []
var thur = []
var fri = []
var sat = []

class FiveDay extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      sunday: [],
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
    }
  }

  splitListArray() {
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
      sunday: sun,
      monday: mon,
      tuesday: tue,
      wednesday: wed,
      thursday: thur,
      friday: fri,
      saturday: sat
    })
  }

  componentDidMount() {
    if(this.props.weather) {
      this.splitListArray()
    }
  }

  render() {
    return(
      <h1>Five Day Forecast</h1>
    )
  }
}

export default FiveDay