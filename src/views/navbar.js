import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () =>  {
  return (
    <div className="App">
      <nav className="uk-navbar uk-fixed-navigation">
        <ul className="uk-navbar-nav">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/properties">Properties</NavLink></li>
          <li><NavLink to="/locations/create">Search location</NavLink></li>
          <li><NavLink to="/contact">Contact Me!</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}


export default Navbar;
