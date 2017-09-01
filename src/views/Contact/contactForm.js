// node modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// custom modules
import { submitContactReqToServer } from '../../actions/submitContactReq';
import EmailMsg from './emailMsg';
import '../../styles/custom.css';

class SendContactInfo extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.submitContactReqToServer('/contacts', this.state)
    this.setState({name: '', email: '', message: ''})
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="uk-position-center">
        <h3 className='uk-text-center'>Thank you for visiting my website.</h3>
        <h3 className='uk-text-center'>You can always contact me on 732-429-6129 or just fill up the below form and I will get back to you sooner!</h3>

          <form className="uk-form" onSubmit={this.handleOnSubmit}>
            <fieldset className="bgColor">
              <div className="uk-form-row">
                <legend>Name</legend>
                <input className="uk-form-large" type="text" placeholder="Your Name" name="name" onChange={this.handleOnChange} value={this.state.name} />
              </div>
              <div className="uk-form-row">
                <legend>Email</legend>
                <input className="uk-form-large" type="email" placeholder="Your Email" name="email" onChange={this.handleOnChange} value={this.state.email} />
              </div>
              <div className="uk-form-row">
                <legend>Message</legend>
                ​<textarea className="uk-form-large" type="txtArea" rows="10" cols="70" placeholder="Your Message" name="message" onChange={this.handleOnChange} value={this.state.message} ></textarea>
              </div>
              <input type="submit" value="Send Email" />
            </fieldset>
          </form>
        </div>
        <div>
          { < EmailMsg /> }
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { submitContactReqToServer }, dispatch);
};


export default connect(null, mapDispatchToProps)(SendContactInfo)
