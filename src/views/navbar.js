import React, { Component} from 'react';
// import { Link } from 'react-router-dom';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Navbar, Nav, NavItem, MenuItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import '../styles/custom.css';

export default class NavbarContainer extends Component {
  render() {
    return (
       <Navbar inverse collapseOnSelect className='navbarDecorate'>
        <Navbar.Header className='navbar-header'>
          <Navbar.Brand className='navbarMarginLeft '>
            <a href="/">Trushal Chitalia</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/properties">
             <NavItem eventKey={1} className="nav-link">Properties</NavItem>
           </LinkContainer>
           <LinkContainer to="/locations/create">
            <NavItem eventKey={2} className="nav-link">Search Location</NavItem>
          </LinkContainer>
          <LinkContainer to="/news">
           <NavItem eventKey={3} className="nav-link">News</NavItem>
         </LinkContainer>


          </Nav>
          <Nav pullRight>

            <LinkContainer to="/contact">
               <MenuItem eventKey={1}>Contact Us</MenuItem>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
};
