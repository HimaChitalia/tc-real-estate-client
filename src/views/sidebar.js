import React from 'react';
import '../styles/custom.css';

import mailImg from '../images/Message-Mail-48.png';
import linkedInImg from '../images/LinkedIn-48 (1).png';
import facebookImg from '../images/Facebook-48.png';

const Sidebar = () => {
    return (
      <div className='uk-position-top-right sidebarCol connect'>
        <ul >
          <li className='links'> <a className='margin' href="mailto:tchitalia215@gmail.com?subject=Real Estate Inquiry"><img src={mailImg} alt={'<a href="mailto:tchitalia215@gmail.com?subject=Real Estate Inquiry">tchitalia215@gmail.com</a>'}/></a> </li>
          <li className='links'> <a className='margin' href="https://www.linkedin.com/in/trushal-chitalia-35988638/"><img src={linkedInImg} alt={'<a href="https://www.linkedin.com/in/trushal-chitalia-35988638/"></a>'}/></a></li>
          <li className='links'> <a className='margin' href="https://www.facebook.com/ChitaliaTrushal/"><img src={facebookImg} alt={'<a href="https://www.facebook.com/ChitaliaTrushal/"></a>'}/></a> </li>
        </ul>
      </div>
    )
}

export default Sidebar;
