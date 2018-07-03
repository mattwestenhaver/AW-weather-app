import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

import source from '../images/blank.png'

class Home extends React.Component {
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
              <Icon name='user' />
              Current Weather
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
              <Icon name='user' />
              Current Weather
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
              <Icon name='user' />
              Current Weather
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
              <Icon name='user' />
              Current Weather
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
              <Icon name='user' />
              Current Weather
            </a>
          </Card.Content>
        </Card>
        </Card.Group>
      </div>
    )
  }
}

export default Home