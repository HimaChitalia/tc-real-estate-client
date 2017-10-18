import React, { Component } from 'react';

import '../../styles/custom.css'

// import linkedInImg from '../../images/LinkedIn-48_contact.png';
// import facebookImg from '../../images/Facebook-48 (1).png';


export default class SocialLinks extends Component {
   render() {
     return (
       <div className='uk-position-center'>
        <br/><h2 >OUR SOCIAL SITES</h2><br/>  <hr /><br/>
        <div>
          <a className="btn" href="https://www.facebook.com/ChitaliaTrushal/" target="_blank" rel="noopener noreferrer"><button className='buttonText bgColor'>Facebook</button></a>
          <a className="btn" href="https://www.linkedin.com/in/trushal-chitalia-35988638/" target="_blank" rel="noopener noreferrer"><button className='buttonText bgColor'>LinkedIn</button></a>
          <br/>
        </div>

      </div>
     )
   }
 }


