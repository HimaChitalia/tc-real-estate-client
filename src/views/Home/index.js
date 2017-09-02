// import Background from '../../images/pexels-photo-277559.jpeg';
import React, { Component } from 'react';
import trushalImag from '../../images/trush_1.jpg';
import Background from '../../images/house_4.png';
import '../../styles/custom.css';
import { SocialIcon } from 'react-social-icons';

var sectionStyle = {
  width: "100%",
  height: "900px",
  backgroundImage: `url(${Background})`
};

var divStyle = {
  width: "100%",
  height: "80%",
  backgroundImage: `url(${trushalImag})`
};

class Home extends Component {
  render() {
    return (
      <div  >
        <section style={ sectionStyle }>
        <div className="divMargin uk-position-center-left uk-position-medium uk-position-center uk-padding-large">
          <div style={divStyle}>
          <br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>
            <div className='bgColor' > <br/>
              <h5 className='marginRemove uk-text-center textColor'> Trushal Chitalia </h5>
              <h5 className='marginRemove uk-text-center textColor'> <a href="http://ddsrealestate.msx.mlsmatrix.com/Matrix/Public/">DDS REAL ESTATE</a> </h5>
              <h5 className='marginRemove textColor'> <a href="tel:+1-732-429-6129">732-429-6129</a> / <a href="mailto:tchitalia215@gmail.com?subject=Real Estate Inquiry">tchitalia215@gmail.com</a> </h5>
              <SocialIcon className='marginRight marginBottom marginLeft' url="https://www.linkedin.com/in/trushal-chitalia-35988638/" color="#2D2F63"  />
              <SocialIcon className='marginRight marginBottom' url="https://www.facebook.com/ChitaliaTrushal/" color="#2D2F63"  />
            </div>
          </div>
        </div>
       </section>
      </div>
    );
  }
}

export default Home;
