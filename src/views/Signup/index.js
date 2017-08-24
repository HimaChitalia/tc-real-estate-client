import React, { Component } from 'react';
import { connect } from 'react-redux';

// Custome node modules
import { signup } from '../../redux/modules/Auth/actions';

class Signup extends Component {
  
  render() {
    return(
      <div className="signup">
        <h1> Create an Account </h1>
        
      </div>
    )
  }
}

// const Signup = () => 
//   <form className="signup_form">
//     <input type="email" />
//     <input type="text" />
//     <input type="password" />
//     <button type="submit" >Create User</ button>
//   </form>;
// 
export default Signup;