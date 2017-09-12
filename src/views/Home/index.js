// import Background from '../../images/pexels-photo-277559.jpeg';
import React, { Component } from 'react';
// import { Container, Row, Col } from 'reactstrap';

// import trushalImag from '../../images/trush_new.jpg';
import '../../styles/custom.css';

import mailImg from '../../images/Message-Mail-48 (1).png';
import linkedInImg from '../../images/LinkedIn-48 (2).png';
import facebookImg from '../../images/Facebook-48 (1).png';


class Home extends Component {
  render() {
    return (
      <div className="jumbotron" >
         <div className="container-fluid pullDown showInSide bgColor uk-position-center-left uk-position-medium uk-position-center">
          <h3 className='uk-text-center textColor textShadow'><strong>Trushal Chitalia</strong></h3>
          <h3 className='uk-text-center'> <a href="http://ddsrealestate.msx.mlsmatrix.com/Matrix/Public/" className='anchoreText' target="_blank" rel="noopener noreferrer"><strong>DDS REAL ESTATE</strong></a> </h3>
          <h3 className=' uk-text-center'> <a href="http://ddsrealestate.msx.mlsmatrix.com/Matrix/Public/" className='anchoreText' target="_blank" rel="noopener noreferrer"><strong>838 Green St STE 202, Iselin, NJ 08830</strong></a></h3>
          <h3 className=' uk-text-center textColor textShadow'><strong> 732-429-6129</strong></h3>

          <ul className='connect'>
            <li className='moveRight marginRemove marginRight'> <a  href="mailto:tchitalia215@gmail.com?subject=Real Estate Inquiry" ><img src={mailImg} alt={'<a href="mailto:tchitalia215@gmail.com?subject=Real Estate Inquiry">tchitalia215@gmail.com</a>'}/></a> </li>
            <li className='marginRemove marginRight'> <a  href="https://www.linkedin.com/in/trushal-chitalia-35988638/" target="_blank" rel="noopener noreferrer"><img src={linkedInImg} alt={'<a href="https://www.linkedin.com/in/trushal-chitalia-35988638/"></a>'}/></a></li>
            <li className='marginRemove marginRight'> <a  href="https://www.facebook.com/ChitaliaTrushal/" target="_blank" rel="noopener noreferrer"><img src={facebookImg} alt={'<a href="https://www.facebook.com/ChitaliaTrushal/"></a>'}/></a> </li>
          </ul>

         </div>
      </div>
    );
  }
}

export default Home;

// <Container >
//
//  <Row className='bgColor pullDown showInSide  col-sm-12'>
//    <Col className='col-12 marginRemove textShadow textColor'><h3 className='uk-text-center'><strong>Trushal Chitalia</strong></h3></Col>
//    <Col className='col-12 marginRemove textShadow'><h3 className='uk-text-center'> <a href="http://ddsrealestate.msx.mlsmatrix.com/Matrix/Public/" className='anchoreText' target="_blank" rel="noopener noreferrer"><strong>DDS REAL ESTATE</strong></a> </h3></Col>
//    <Col className='col-12 marginRemove textShadow textColor'><h3 className=' uk-text-center'> <a href="http://ddsrealestate.msx.mlsmatrix.com/Matrix/Public/" className='anchoreText' target="_blank" rel="noopener noreferrer"><strong>838 Green St STE 202,</strong></a></h3></Col>
//    <Col className='col-12 marginRemove textShadow textColor'><h3 className=' uk-text-center'> <a href="http://ddsrealestate.msx.mlsmatrix.com/Matrix/Public/" className='anchoreText' target="_blank" rel="noopener noreferrer"><strong>Iselin, NJ 08830</strong></a></h3></Col>
//    <Col className='col-12 marginRemove textShadow textColor'><h3 className=' uk-text-center'><strong> 732-429-6129</strong></h3></Col>
//  </Row>
 // </Container>

// <div>
//  <section style={ sectionStyle }>
//   <Container >
//    <Row className=''>
//     <div className='homeMargin'>
//       <Row className='imgMargin col-lg-pull-5 col-md-offset-2 col-sm-3'>
//        <Col className=' hidden-xs hidden-sm col-12'><img src={trushalImag} alt={'Trushal Chitalia'}/></Col>
//        <Col className='col-12 marginRemove textShadow textColor'><h3 className='uk-text-center'><strong>Trushal Chitalia</strong></h3></Col>
//        <Col className='col-12 marginRemove textShadow'><h3 className='uk-text-center'> <a href="http://ddsrealestate.msx.mlsmatrix.com/Matrix/Public/" className='anchoreText' target="_blank" rel="noopener noreferrer">DDS REAL ESTATE</a> </h3></Col>
//        <Col className='col-12 marginRemove textShadow textColor'><h3 className=' uk-text-center'> <a href="http://ddsrealestate.msx.mlsmatrix.com/Matrix/Public/" className='anchoreText' target="_blank" rel="noopener noreferrer">838 Green St STE 202,</a></h3></Col>
//        <Col className='col-12 marginRemove textShadow textColor'><h3 className=' uk-text-center'> <a href="http://ddsrealestate.msx.mlsmatrix.com/Matrix/Public/" className='anchoreText' target="_blank" rel="noopener noreferrer">Iselin, NJ 08830</a></h3></Col>
//        <Col className='col-12 marginRemove textShadow textColor'><h3 className=' uk-text-center'> 732-429-6129</h3></Col>
//       </Row>
//      </div>
//     </Row>
//   </Container>
//  </section>
//  <div className='sideText navbar-color uk-text-center uk-position-bottom'>
//   <h5 className='fontSize' > When It Comes To Real Estate, Think Of Me - Trushal Chitalia </h5>
//  </div>
// </div>
