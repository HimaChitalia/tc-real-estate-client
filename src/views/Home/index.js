// import Background from '../../images/pexels-photo-277559.jpeg';
import React, { Component } from 'react';
import trushalImag from '../../images/trush_1.jpg';
import Background from '../../images/house_4.png';
import '../../styles/custom.css';


import mailImg from '../../images/Message-Mail-48 (1).png';
import linkedInImg from '../../images/LinkedIn-48 (2).png';
import facebookImg from '../../images/Facebook-48 (1).png';

var sectionStyle = {
  width: "100%",
  height: "900px",
  backgroundImage: `url(${Background})`
};

class Home extends Component {
  render() {
    return (
      <div  >
        <section style={ sectionStyle }>
        <div className="divMargin uk-position-center-left uk-position-medium uk-position-center ">
          <div>
            <img src={trushalImag} alt={'Trushal Chitalia'}/>
            <div className='bgColor' > <br/>
              <h5 className='marginRemove uk-text-center textColor'> Trushal Chitalia </h5>
              <h5 className='marginRemove uk-text-center textColor'> <a href="http://ddsrealestate.msx.mlsmatrix.com/Matrix/Public/" target="_blank" rel="noopener noreferrer">DDS REAL ESTATE</a> </h5>
              <h5 className='marginRemove uk-text-center textColor'> <a href="http://ddsrealestate.msx.mlsmatrix.com/Matrix/Public/" target="_blank" rel="noopener noreferrer">838 Green St STE 202, Iselin, NJ 08830</a> </h5>
              <h5 className='marginRemove textColor uk-text-center'>  732-429-6129 </h5>

              <ul className='connect'>
                <li className='moveRight marginRemove marginRight'> <a  href="mailto:tchitalia215@gmail.com?subject=Real Estate Inquiry" ><img src={mailImg} alt={'<a href="mailto:tchitalia215@gmail.com?subject=Real Estate Inquiry">tchitalia215@gmail.com</a>'}/></a> </li>
                <li className='marginRemove marginRight'> <a  href="https://www.linkedin.com/in/trushal-chitalia-35988638/" target="_blank" rel="noopener noreferrer"><img src={linkedInImg} alt={'<a href="https://www.linkedin.com/in/trushal-chitalia-35988638/"></a>'}/></a></li>
                <li className='marginRemove marginRight'> <a  href="https://www.facebook.com/ChitaliaTrushal/" target="_blank" rel="noopener noreferrer"><img src={facebookImg} alt={'<a href="https://www.facebook.com/ChitaliaTrushal/"></a>'}/></a> </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='sideText navbar-color uk-text-center uk-position-bottom'>
          <h5 className='fontSize' > When It Comes To Real Estate, Think Of Me - Trushal Chitalia </h5>
        </div>
       </section>
      </div>
    );
  }
}

export default Home;
