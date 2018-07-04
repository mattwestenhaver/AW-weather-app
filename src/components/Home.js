import React from 'react'
import { Card, Image, Responsive } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import source from '../images/blank.png'
import laThumbnail from '../images/la.jpg'
import manhattanThumbnail from '../images/manhattan.jpg'
import chicagoThumbnail from '../images/chicago.jpg'
import miamiThumbnail from '../images/miami.jpg'
import houstonThumbnail from '../images/houston.jpg'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Responsive maxWidth={767}>
          <Card.Group centered itemsPerRow={1}>
            <Card>
              <Card.Content>
                <Card.Header><Link to='/losangeles'>Los Angeles</Link></Card.Header>
              </Card.Content>
              <Image src={laThumbnail} />
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
                <Card.Header><Link to='/manhattan'>Manhattan</Link></Card.Header>
              </Card.Content>
              <Image src={manhattanThumbnail} />
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
                <Card.Header><Link to='/chicago'>Chicago</Link></Card.Header>
              </Card.Content>
              <Image src={chicagoThumbnail} />
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
                <Card.Header><Link to='/miami'>Miami</Link></Card.Header>
              </Card.Content>
              <Image src={miamiThumbnail} />
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
                <Card.Header><Link to='/houston'>Houston</Link></Card.Header>
              </Card.Content>
              <Image src={houstonThumbnail} />
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
        </Responsive>
        <Responsive minWidth={768}>
          <Card.Group centered itemsPerRow={5}>
            <Card>
              <Card.Content>
                <Card.Header><Link to='/losangeles'>Los Angeles</Link></Card.Header>
              </Card.Content>
              <Image src={laThumbnail} />
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
                <Card.Header><Link to='/manhattan'>Manhattan</Link></Card.Header>
              </Card.Content>
              <Image src={manhattanThumbnail} />
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
                <Card.Header><Link to='/chicago'>Chicago</Link></Card.Header>
              </Card.Content>
              <Image src={chicagoThumbnail} />
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
                <Card.Header><Link to='/miami'>Miami</Link></Card.Header>
              </Card.Content>
              <Image src={miamiThumbnail} />
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
                <Card.Header><Link to='/houston'>Houston</Link></Card.Header>
              </Card.Content>
              <Image src={houstonThumbnail} />
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
        </Responsive>
        
      </div>
    )
  }
}

export default Home