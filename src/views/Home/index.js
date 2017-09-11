// import Background from '../../images/pexels-photo-277559.jpeg';
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

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
         <Row>
             <Col xs="auto"><h1> I am Here!</h1></Col>
          </Row>
        <div className='sideText navbar-color uk-text-center uk-position-bottom'>
          <h5 className='fontSize' > When It Comes To Real Estate, Think Of Me - Trushal Chitalia </h5>
        </div>
       </section>
      </div>
    );
  }
}

export default Home;
