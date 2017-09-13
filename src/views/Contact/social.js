import React, { Component } from 'react';

import linkedInImg from '../../images/LinkedIn-48 (2).png';
import facebookImg from '../../images/Facebook-48 (1).png';


export default class SocialLinks extends Component {
   render() {
     return (
       <div>
        <h2 className='uk-text-center'> OUR SOCIAL SITES </h2>
        <a className="btn" href="https://www.linkedin.com/in/trushal-chitalia-35988638/" target="_blank" rel="noopener noreferrer"><img src={linkedInImg} alt={'<a href="https://www.linkedin.com/in/trushal-chitalia-35988638/"></a>'}/> LinkedIn</a>
      </div>
     )
   }
 }
