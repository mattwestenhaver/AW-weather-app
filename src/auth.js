import axios from 'axios'

const apiKey = process.env.REACT_APP_VAR_APIKEY

class AuthClient {

  constructor() {
    this.request = axios.create({})
  }

  getWeather(id) {
    return this.request({
      method: 'Get', 
      url: `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${apiKey}`
    })
      .then(response => response)
  }

}

export default new AuthClient()
