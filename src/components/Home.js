import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import source from '../images/blank.png'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    
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
            {this.props.losAngeles
              ? <Card.Content extra>
                  <Link to='/losangeles'>
                    {Math.round(this.props.losAngeles.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.props.losAngeles.list[0].weather[0].main}
                  </Link>
                </Card.Content>
              : null
            }  
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Manhattan</Card.Header>
            </Card.Content>
            <Image src={source} />
            <Card.Content>
              <Card.Meta>Icon here</Card.Meta>
            </Card.Content>
            {this.props.manhattan
              ? <Card.Content extra>
                  <Link to='/manhattan'>
                    {Math.round(this.props.manhattan.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.props.manhattan.list[0].weather[0].main}
                  </Link>
                </Card.Content>
              : null
            }
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Chicago</Card.Header>
            </Card.Content>
            <Image src={source} />
            <Card.Content>
              <Card.Meta>Icon here</Card.Meta>
            </Card.Content>
            {this.props.chicago
              ? <Card.Content extra>
                  <Link to='/chicago'>
                    {Math.round(this.props.chicago.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.props.chicago.list[0].weather[0].main}
                  </Link>
                </Card.Content>
              : null
            }
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Miami</Card.Header>
            </Card.Content>
            <Image src={source} />
            <Card.Content>
              <Card.Meta>Icon here</Card.Meta>
            </Card.Content>
            {this.props.miami
              ? <Card.Content extra>
                  <Link to='/miami'>
                    {Math.round(this.props.miami.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.props.miami.list[0].weather[0].main}
                  </Link>
                </Card.Content>
              : null
            }
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Houston</Card.Header>
            </Card.Content>
            <Image src={source} />
            <Card.Content>
              <Card.Meta>Icon here</Card.Meta>
            </Card.Content>
            {this.props.houston
              ? <Card.Content extra>
                  <Link to='/houston'>
                    {Math.round(this.props.houston.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.props.houston.list[0].weather[0].main}
                  </Link>
                </Card.Content>
              : null
            }
          </Card>
        </Card.Group>
      </div>
    )
  }
}

export default Home