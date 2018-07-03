import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Icon } from 'semantic-ui-react'

class MenuBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  scrollToTop() {
    window.scrollTo(0, 0)
  }

  render() {
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to='/'><NavItem eventKey={5}>AW Weather App</NavItem></LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/losangeles' onClick={this.scrollToTop}><NavItem eventKey={1}>Los Angeles</NavItem></LinkContainer>
            <LinkContainer to='/manhattan' onClick={this.scrollToTop}><NavItem eventKey={2}>Manhattan</NavItem></LinkContainer>
            <LinkContainer to='/chicago' onClick={this.scrollToTop}><NavItem eventKey={3}>Chicago</NavItem></LinkContainer>
            <LinkContainer to='/miami' onClick={this.scrollToTop}><NavItem eventKey={4}>Miami</NavItem></LinkContainer>
            <LinkContainer to='/houston' onClick={this.scrollToTop}><NavItem eventKey={5}>Houston</NavItem></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MenuBar