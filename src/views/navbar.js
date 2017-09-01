import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () =>  {
  return (
    <div className="App">
      <nav className="uk-navbar fixed">
        <ul className="uk-navbar-nav">
          <li className="navlink-style"><NavLink to="/">Home</NavLink></li>
          <li className="navlink-style"><NavLink to="/properties">Properties</NavLink></li>
          <li className="navlink-style"><NavLink to="/locations/create">Search location</NavLink></li>
          <li className="navlink-style"><NavLink to="/contact">Contact Me!</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}


export default Navbar;
