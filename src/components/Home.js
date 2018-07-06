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

  setIcon(id) {
    return `http://openweathermap.org/img/w/${id}.png`
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
              <Link to='/losangeles'><Image src={laThumbnail} /></Link>
              <Card.Content>
                {this.props.losAngeles
                  ? <Card.Meta>
                      <Image src={this.setIcon(this.props.losAngeles.list[0].weather[0].icon)} />
                      <Link to='/losangeles'>
                        {Math.round(this.props.losAngeles.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.props.losAngeles.list[0].weather[0].main}
                      </Link>
                    </Card.Meta>
                  : null
                }
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header><Link to='/manhattan'>Manhattan</Link></Card.Header>
              </Card.Content>
              <Link to='/manhattan'><Image src={manhattanThumbnail} /></Link>
              <Card.Content>
                {this.props.manhattan
                  ? <Card.Meta>
                      <Image src={this.setIcon(this.props.manhattan.list[0].weather[0].icon)} />
                      <Link to='/manhattan'>
                        {Math.round(this.props.manhattan.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.props.manhattan.list[0].weather[0].main}
                      </Link>
                    </Card.Meta>
                  : null
                }
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header><Link to='/chicago'>Chicago</Link></Card.Header>
              </Card.Content>
              <Link to='/chicago'><Image src={chicagoThumbnail} /></Link>
              <Card.Content>
                {this.props.chicago
                  ? <Card.Meta>
                      <Image src={this.setIcon(this.props.chicago.list[0].weather[0].icon)} />
                      <Link to='/chicago'>
                        {Math.round(this.props.chicago.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.props.chicago.list[0].weather[0].main}
                      </Link>
                    </Card.Meta>
                  : null
                }
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header><Link to='/miami'>Miami</Link></Card.Header>
              </Card.Content>
              <Link to='/miami'><Image src={miamiThumbnail} /></Link>
              <Card.Content>
                {this.props.miami
                  ? <Card.Meta>
                      <Image src={this.setIcon(this.props.miami.list[0].weather[0].icon)} />
                      <Link to='/miami'>
                        {Math.round(this.props.miami.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.props.miami.list[0].weather[0].main}
                      </Link>
                    </Card.Meta>
                  : null
                }
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header><Link to='/houston'>Houston</Link></Card.Header>
              </Card.Content>
              <Link to='/houston'><Image src={houstonThumbnail} /></Link>
              <Card.Content>
                {this.props.houston
                  ? <Card.Meta>
                      <Image src={this.setIcon(this.props.houston.list[0].weather[0].icon)} />
                      <Link to='/houston'>
                        {Math.round(this.props.houston.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.props.houston.list[0].weather[0].main}
                      </Link>
                    </Card.Meta>
                  : null
                }
              </Card.Content>
            </Card>
          </Card.Group>
        </Responsive>
        <Responsive minWidth={768}>
          <Card.Group centered itemsPerRow={5}>
            <Card>
              <Card.Content>
                <Card.Header><Link to='/losangeles'>Los Angeles</Link></Card.Header>
              </Card.Content>
              <Link to='/losangeles'><Image src={laThumbnail} /></Link>
              <Card.Content>
                {this.props.losAngeles
                  ? <Card.Meta>
                      <Image src={this.setIcon(this.props.losAngeles.list[0].weather[0].icon)} />
                      <Link to='/losangeles'>
                        {Math.round(this.props.losAngeles.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.props.losAngeles.list[0].weather[0].main}
                      </Link>
                    </Card.Meta>
                  : null
                }
              </Card.Content>  
            </Card>
            <Card>
              <Card.Content>
                <Card.Header><Link to='/manhattan'>Manhattan</Link></Card.Header>
              </Card.Content>
              <Link to='/manhattan'><Image src={manhattanThumbnail} /></Link>
              <Card.Content>
                {this.props.manhattan
                  ? <Card.Meta>
                      <Image src={this.setIcon(this.props.manhattan.list[0].weather[0].icon)} />
                      <Link to='/manhattan'>
                        {Math.round(this.props.manhattan.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.props.manhattan.list[0].weather[0].main}
                      </Link>
                    </Card.Meta>
                  : null
                }
              </Card.Content> 
            </Card>
            <Card>
              <Card.Content>
                <Card.Header><Link to='/chicago'>Chicago</Link></Card.Header>
              </Card.Content>
              <Link to='/chicago'><Image src={chicagoThumbnail} /></Link>
              <Card.Content>
                {this.props.chicago
                  ? <Card.Meta>
                      <Image src={this.setIcon(this.props.chicago.list[0].weather[0].icon)} />
                      <Link to='/chicago'>
                        {Math.round(this.props.chicago.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.props.chicago.list[0].weather[0].main}
                      </Link>
                    </Card.Meta>
                  : null
                }
              </Card.Content> 
            </Card>
            <Card>
              <Card.Content>
                <Card.Header><Link to='/miami'>Miami</Link></Card.Header>
              </Card.Content>
              <Link to='/miami'><Image src={miamiThumbnail} /></Link>
              <Card.Content>
                {this.props.miami
                  ? <Card.Meta>
                      <Image src={this.setIcon(this.props.miami.list[0].weather[0].icon)} />
                      <Link to='/miami'>
                        {Math.round(this.props.miami.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.props.miami.list[0].weather[0].main}
                      </Link>
                    </Card.Meta>
                  : null
                }
              </Card.Content> 
            </Card>
            <Card>
              <Card.Content>
                <Card.Header><Link to='/houston'>Houston</Link></Card.Header>
              </Card.Content>
              <Link to='/houston'><Image src={houstonThumbnail} /></Link>
              <Card.Content>
                {this.props.houston
                  ? <Card.Meta>
                      <Image src={this.setIcon(this.props.houston.list[0].weather[0].icon)} />
                      <Link to='/houston'>
                        {Math.round(this.props.houston.list[0].main.temp * (9/5) - 459.67) + '˚F and ' + this.props.houston.list[0].weather[0].main}
                      </Link>
                    </Card.Meta>
                  : null
                }
              </Card.Content> 
            </Card>
          </Card.Group>
        </Responsive>
        
      </div>
    )
  }
}

export default Home