import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import auth from '../auth.js'

import source from '../images/blank.png'

const ids = [
  {key: 'losAngeles', value: 5368361},
  {key: 'manhattan', value: 5125771},
  {key: 'chicago', value: 4887398},
  {key: 'miami', value: 4164138},
  {key: 'houston', value: 4699066},
]

class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      losAngeles: null,
      manhattan: null,
      chicago: null,
      miami: null,
      houston: null     
    }
  }

  componentDidMount() {
    auth.getWeather(ids[0].value).then(response => {
      this.setState({
        losAngeles: response.data
      })
    })
    auth.getWeather(ids[1].value).then(response => {
      this.setState({
        manhattan: response.data
      })
    })
    auth.getWeather(ids[2].value).then(response => {
      this.setState({
        chicago: response.data
      })
    })
    auth.getWeather(ids[3].value).then(response => {
      this.setState({
        miami: response.data
      })
    })
    auth.getWeather(ids[4].value).then(response => {
      this.setState({
        houston: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <Card.Group centered itemsPerRow={5}>
          <Card>
            <Card.Content>
              <Card.Header>Los Angeles</Card.Header>
            </Card.Content>
            <Image src={source} />
            <Card.Content>
              <Card.Meta>Icon here</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <a>
                {this.state.losAngeles
                  ? Math.round(this.state.losAngeles.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.state.losAngeles.list[0].weather[0].main
                  : null
                }
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Manhattan</Card.Header>
            </Card.Content>
            <Image src={source} />
            <Card.Content>
              <Card.Meta>Icon here</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <a>
                {this.state.manhattan
                  ? Math.round(this.state.manhattan.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.state.manhattan.list[0].weather[0].main
                  : null
                }
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Chicago</Card.Header>
            </Card.Content>
            <Image src={source} />
            <Card.Content>
              <Card.Meta>Icon here</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <a>
                {this.state.chicago
                  ? Math.round(this.state.chicago.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.state.chicago.list[0].weather[0].main
                  : null
                }
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Miami</Card.Header>
            </Card.Content>
            <Image src={source} />
            <Card.Content>
              <Card.Meta>Icon here</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <a>
                {this.state.miami
                  ? Math.round(this.state.miami.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.state.miami.list[0].weather[0].main
                  : null
                }
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Houston</Card.Header>
            </Card.Content>
            <Image src={source} />
            <Card.Content>
              <Card.Meta>Icon here</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <a>
                {this.state.houston
                  ? Math.round(this.state.houston.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.state.houston.list[0].weather[0].main
                  : null
                }
              </a>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    )
  }
}

export default Home