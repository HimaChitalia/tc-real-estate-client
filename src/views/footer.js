import React from 'react';
import  {ApFooter, ApFooterStyle} from 'apeman-react-footer';
import '../styles/custom.css';
import { SocialIcon } from 'react-social-icons';

import callImg from '../images/Phone-48.png';
import mailImg from '../images/Mail-01-48.png';

const Footer = () => {
    return (
      <div className='footerCol marginRemove'>
        <ApFooterStyle />
        <ApFooter className='connect'>
          <ul>
            <li><a className='margin' href="tel:+1-732-429-6129"><img src={callImg} alt={'<a href="tel:+1-732-429-6129">732-429-6129</a>'}/></a> </li>
            <li> <a className='margin' href="mailto:tchitalia215@gmail.com?subject=Real Estate Inquiry"><img src={mailImg} alt={'<a href="mailto:tchitalia215@gmail.com?subject=Real Estate Inquiry">tchitalia215@gmail.com</a>'}/></a> </li>
            <li> <SocialIcon className='margin' url="https://www.linkedin.com/in/trushal-chitalia-35988638/" color="white"  /></li>
            <li> <SocialIcon className='margin' url="https://www.facebook.com/ChitaliaTrushal/" color="white"  /></li>
          </ul>
        </ApFooter>
      </div>
    )
}

export default Footer;
