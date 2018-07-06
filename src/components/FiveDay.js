import React from 'react'

class FiveDay extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      day_0: [],
      day_1: [],
      day_2: [],
      day_3: [],
      day_4: []
    }
  }

  splitListArray() {
    var zero = []
    var one = []
    var two = []
    var three = []
    var four = []
    if(new Date().getDay() === 0 || new Date().getDay() === 1) {
      this.props.weather.list.forEach(list => {
        if ((new Date(list.dt * 1000).getDay()) === (new Date().getDay() + 1)) {zero.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === (new Date().getDay() + 2)) {one.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === (new Date().getDay() + 3)) {two.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === (new Date().getDay() + 4)) {three.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === (new Date().getDay() + 5)) {four.push(list)}
        var total = 0
        console.log(zero.reduce((a,b) => ({total: a.main.temp + b.main.temp})))
      })
    } else if(new Date().getDay() === 2) {
      this.props.weather.list.forEach(list => {
        if ((new Date(list.dt * 1000).getDay()) === 3) {zero.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 4) {one.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 5) {two.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 5) {three.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 0) {four.push(list)}
      })
    } else if(new Date().getDay() === 3) {
      this.props.weather.list.forEach(list => {
        if ((new Date(list.dt * 1000).getDay()) === 4) {zero.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 5) {one.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 6) {two.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 0) {three.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 1) {four.push(list)}
      })
    } else if(new Date().getDay() === 4) {
      this.props.weather.list.forEach(list => {
        if ((new Date(list.dt * 1000).getDay()) === 5) {zero.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 6) {one.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 0) {two.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 1) {three.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 2) {four.push(list)}
      })
    } else if(new Date().getDay() === 5) {
      this.props.weather.list.forEach(list => {
        if ((new Date(list.dt * 1000).getDay()) === 6) {zero.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 0) {one.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 1) {two.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 2) {three.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 3) {four.push(list)}
      })
    } else if(new Date().getDay() === 6) {
      this.props.weather.list.forEach(list => {
        if ((new Date(list.dt * 1000).getDay()) === 0) {zero.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 1) {one.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 2) {two.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 3) {three.push(list)}
        if ((new Date(list.dt * 1000).getDay()) === 4) {four.push(list)}
      })
    }
    this.setState({ day_0: zero, day_1: one, day_2: two, day_3: three, day_4: four })
  }

  findMinTemp(array) {
    array.reduce((a,b) => {
      return a.main.temp_min < b.main.temp_min ? 'a' : 'b'
    }, 1000)
  }

  componentDidMount() {
    if(this.props.weather) {
      this.splitListArray()
    }
  }

  render() {

    const currentDay = this.state.currentDay
    const day_0 = this.state.day_0

    return(
      <div>
        {this.state.day_0.length > 0
          ? <div>
              <div className='fiveDay-card'>
                <h1>{Math.round((day_0.reduce((acc, obj) => { return acc + obj.main.temp; }, 0) / day_0.length) * 9/5 - 459.67) + '˚F'}</h1>
                <h1>Low: {this.findMinTemp(day_0).bind(this)}</h1>
              </div>
              <div className='fiveDay-card'>
                <h1>{Math.round((this.state.day_1.reduce((acc, obj) => { return acc + obj.main.temp; }, 0) / this.state.day_1.length) * 9/5 - 459.67) + '˚F'}</h1>
              </div>
              <div className='fiveDay-card'>
                <h1>{Math.round((this.state.day_2.reduce((acc, obj) => { return acc + obj.main.temp; }, 0) / this.state.day_2.length) * 9/5 - 459.67) + '˚F'}</h1>
              </div>
              <div className='fiveDay-card'>
                <h1>{Math.round((this.state.day_3.reduce((acc, obj) => { return acc + obj.main.temp; }, 0) / this.state.day_3.length) * 9/5 - 459.67) + '˚F'}</h1>
              </div>
              <div className='fiveDay-card'>
                <h1>{Math.round((this.state.day_4.reduce((acc, obj) => { return acc + obj.main.temp; }, 0) / this.state.day_4.length) * 9/5 - 459.67) + '˚F'}</h1>
              </div>
            </div>
          : <h1>Retrieving Your Forecast</h1>
        }
      </div>
    )
  }
}

export default FiveDay