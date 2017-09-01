// import Background from '../../images/pexels-photo-277559.jpeg';
import React, { Component } from 'react';
import ReactRevealText from 'react-reveal-text';
import Background from '../../images/kitchen-2486092_1920.jpg';


var sectionStyle = {
  width: "100%",
  height: "900px",
  backgroundImage: `url(${Background})`
};

class Home extends Component {
  render() {
    return (
      <div className="uk-height-viewport" >
        <section style={ sectionStyle }>
        <div className='uk-position-medium uk-position-center uk-text-center'>
          <ReactRevealText
            text="AMAZING TEXT"
            show
            className="my-class-name"
            style={{ color: "tomato", fontSize: "24px", lineHeight: "36px", textAlign: "center", fontFamily: "sans-serif", letterSpacing: "1.2em", paddingLeft: "1.2em"}}
          />
        </div>
        </section>
      </div>
    );
  }
}

export default Home;
