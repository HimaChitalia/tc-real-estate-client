import React from 'react';
import '../styles/custom.css';

import mailImg from '../images/Message-Mail-48-t.png';
import linkedInImg from '../images/LinkedIn-48-t.png';
import facebookImg from '../images/Facebook-48-t.png';

const Sidebar = () => {
    return (
      <div className='uk-position-center-right sidebarCol'>
        <div className='links'> <a className='margin' href="mailto:tchitalia215@gmail.com?subject=Real Estate Inquiry"><img src={mailImg} alt={'<a href="mailto:tchitalia215@gmail.com?subject=Real Estate Inquiry">tchitalia215@gmail.com</a>'}/></a> </div>
        <div className='links'> <a className='margin' href="https://www.linkedin.com/in/trushal-chitalia-35988638/"><img src={linkedInImg} alt={'<a href="https://www.linkedin.com/in/trushal-chitalia-35988638/"></a>'}/></a></div>
        <div className='links'> <a className='margin' href="https://www.facebook.com/ChitaliaTrushal/"><img src={facebookImg} alt={'<a href="https://www.facebook.com/ChitaliaTrushal/"></a>'}/></a> </div>
      </div>
    )
}

export default Sidebar;
