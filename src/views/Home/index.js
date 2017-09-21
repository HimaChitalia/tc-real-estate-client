// import Background from '../../images/pexels-photo-277559.jpeg';
import React, { Component } from 'react';
// import { Container, Row, Col } from 'reactstrap';

import trushalImag from '../../images/trush_1.jpg';
import '../../styles/custom.css';

import mailImg from '../../images/Message-Mail-48 (1).png';
import linkedInImg from '../../images/LinkedIn-48 (2).png';
import facebookImg from '../../images/Facebook-48 (1).png';


class Home extends Component {
  render() {
    return (
      <div className="jumbotron divTopMargin" >
         <div id='smallScreen' className="container-fluid pullDown showInSide bgColor uk-position-center-left uk-position-medium uk-position-center">
          <h3 className='uk-text-center textColor textShadow'><strong>Trushal Chitalia</strong></h3>
          <h3 className='uk-text-center'> <a href="http://ddsrealestate.msx.mlsmatrix.com/Matrix/Public/" className='anchoreText' target="_blank" rel="noopener noreferrer"><strong>DDS REAL ESTATE</strong></a> </h3>
          <h3 className=' uk-text-center'> <a href="http://ddsrealestate.msx.mlsmatrix.com/Matrix/Public/" className='anchoreText' target="_blank" rel="noopener noreferrer"><strong>838 Green St STE 202, Iselin, NJ 08830</strong></a></h3>
          <h3 className=' uk-text-center textColor textShadow'><strong> 732-429-6129</strong></h3>
          <div className='divSocial'>
            <ul className='connect'>
              <li className='moveRight marginRemove marginRight'> <a  href="mailto:tchitalia215@gmail.com?subject=Real Estate Inquiry" ><img src={mailImg} alt={'<a href="mailto:tchitalia215@gmail.com?subject=Real Estate Inquiry">tchitalia215@gmail.com</a>'}/></a> </li>
              <li className='marginRemove marginRight'> <a  href="https://www.linkedin.com/in/trushal-chitalia-35988638/" target="_blank" rel="noopener noreferrer"><img src={linkedInImg} alt={'<a href="https://www.linkedin.com/in/trushal-chitalia-35988638/"></a>'}/></a></li>
              <li className='marginRemove marginRight'> <a  href="https://www.facebook.com/ChitaliaTrushal/" target="_blank" rel="noopener noreferrer"><img src={facebookImg} alt={'<a href="https://www.facebook.com/ChitaliaTrushal/"></a>'}/></a> </li>
            </ul>
          </div>
         </div>

         <div id='bigScreen' className="divMargin uk-position-center-left uk-position-medium uk-position-center ">
          <div>
            <img src={trushalImag} alt={'Trushal Chitalia'}/>
            <div className='bgColor' > <br/>
              <h5 className='marginRemove uk-text-center textColorBig'> Trushal Chitalia </h5>
              <h5 className='marginRemove uk-text-center'> <a className='anchoreTextBig' href="http://ddsrealestate.msx.mlsmatrix.com/Matrix/Public/" target="_blank" rel="noopener noreferrer">DDS REAL ESTATE</a> </h5>
              <h5 className='marginRemove uk-text-center'> <a className='anchoreTextBig' href="http://ddsrealestate.msx.mlsmatrix.com/Matrix/Public/" target="_blank" rel="noopener noreferrer">838 Green St STE 202, Iselin, NJ 08830</a> </h5>
              <h5 className='marginRemove textColorBig uk-text-center'>  732-429-6129 </h5>

              <ul className='connectBig'>
                <li > <a  href="mailto:tchitalia215@gmail.com?subject=Real Estate Inquiry" ><img src={mailImg} alt={'<a href="mailto:tchitalia215@gmail.com?subject=Real Estate Inquiry">tchitalia215@gmail.com</a>'}/></a> </li>
                <li > <a  href="https://www.linkedin.com/in/trushal-chitalia-35988638/" target="_blank" rel="noopener noreferrer"><img src={linkedInImg} alt={'<a href="https://www.linkedin.com/in/trushal-chitalia-35988638/"></a>'}/></a></li>
                <li > <a  href="https://www.facebook.com/ChitaliaTrushal/" target="_blank" rel="noopener noreferrer"><img src={facebookImg} alt={'<a href="https://www.facebook.com/ChitaliaTrushal/"></a>'}/></a> </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='sideText navbar-color uk-text-center uk-position-bottom'>
          <h5 className='fontSize' > When It Comes To Real Estate, Think Of Me - Trushal Chitalia </h5>
        </div>
      </div>
    );
  }
}

export default Home;
