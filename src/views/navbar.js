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

// <Navbar.Text>
//           <Navbar.Link href="https://google.com" target="_blank">External Link</Navbar.Link>
//         </Navbar.Text>

// class Navbar#####Container extends Component {
//   constructor(props) {
//     super(props);
//
//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false,
//       dropdownOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen,
//       dropdownOpen: !this.state.dropdownOpen
//     });
//   }
//   render() {
//     return (
//       <div className='navMargin container-fluid' >
//         <Navbar className='navbar-color' toggleable>
//           <NavbarToggler right onClick={this.toggle} />
//           <NavbarBrand tag={Link} to="/" activeClassName="active" >
//             Trushal Chitalia
//           </NavbarBrand>
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <NavLink tag={Link} to="/properties" activeClassName="active">
//                    Properties
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink tag={Link} to="/locations/create" activeClassName="active">
//                    Search location
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink tag={Link} to="/news" activeClassName="active">
//                    Industry News
//                 </NavLink>
//               </NavItem>
//             </Nav>
//             <Dropdown isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
//               <DropdownToggle caret>
//                 Contact Me!
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem> <a href="https://www.linkedin.com/in/trushal-chitalia-35988638/" target="_blank" rel="noopener noreferrer">LinkedIn</a></DropdownItem>
//                 <DropdownItem> <a href="https://www.facebook.com/ChitaliaTrushal/" target="_blank" rel="noopener noreferrer">Facebook</a></DropdownItem>
//                 <DropdownItem divider/>
//                 <DropdownItem tag={Link} to="/contact" activeClassName="active">Send an Email!</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }
