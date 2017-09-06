import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/custom.css';

import mailImg from '../images/Message-Mail-48.png';
import linkedInImg from '../images/LinkedIn-48 (1).png';
import facebookImg from '../images/Facebook-48.png';

const Navbar = () =>  {
  return (
    <div className="App">
      <nav className="uk-navbar uk-fixed-navigation navbar-color">
        <ul className="uk-navbar-nav">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/properties">Properties</NavLink></li>
          <li><NavLink to="/locations/create">Search location</NavLink></li>
          <li><NavLink to="/news">Industry News</NavLink></li>
          <li><NavLink to="/contact">Contact Me!</NavLink></li>
          <div className='connect uk-position-top-right '>
            <li className='links'> <a className='margin' href="mailto:tchitalia215@gmail.com?subject=Real Estate Inquiry" target="_blank" rel="noopener noreferrer"><img src={mailImg} alt={'<a href="mailto:tchitalia215@gmail.com?subject=Real Estate Inquiry">tchitalia215@gmail.com</a>'}/></a> </li>
            <li className='links'> <a className='margin' href="https://www.linkedin.com/in/trushal-chitalia-35988638/" target="_blank" rel="noopener noreferrer"><img src={linkedInImg} alt={'<a href="https://www.linkedin.com/in/trushal-chitalia-35988638/"></a>'}/></a></li>
            <li className='links'> <a className='margin marginRightNav' href="https://www.facebook.com/ChitaliaTrushal/" target="_blank" rel="noopener noreferrer"><img src={facebookImg} alt={'<a href="https://www.facebook.com/ChitaliaTrushal/"></a>'}/></a> </li>
          </div>
        </ul>
      </nav>
    </div>
  )
}


export default Navbar;
