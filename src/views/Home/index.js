import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';

import Background from '../../images/pexels-photo-277559.jpeg';

const styles = StyleSheet.create({
  background: {
    backgroundImage: `url(${Background})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat'
  }
})

class Home extends Component {
  render(){
    return (
      <section > 
        <div> 
          <br/ >
          <h1>Home Page</h1>
         </div> 
      </section>
    )
  }
}


export default Home;
