// node modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// custom modules
import { submitContactReqToServer } from '../../actions/submitContactReq';
import EmailMsg from './emailMsg';
import SocialLinks from './social';
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
        <div className="uk-position-center locationFormMargin">

          <form id="largeScreenForm" className="uk-form" onSubmit={this.handleOnSubmit}>
            <fieldset className="bgColor">
              <h2 className='uk-text-center'>Get In Touch!</h2>
              <div className="uk-form-row">
                <legend>Name</legend>
                <input type="text" placeholder="Your Name" name="name" onChange={this.handleOnChange} value={this.state.name} />
              </div>
              <div className="uk-form-row">
                <legend>Email</legend>
                <input type="email" placeholder="Your Email" name="email" onChange={this.handleOnChange} value={this.state.email} />
              </div>
              <div className="uk-form-row">
                <legend>Message</legend>
                ​<textarea className='textareaSize' rows="15" cols="70" type="txtArea" placeholder="Your Message" name="message" onChange={this.handleOnChange} value={this.state.message} ></textarea>
              </div>
              <input type="submit" value="Send Email" />
            </fieldset>
          </form>

          <form id="smallScreenForm" className="uk-form" onSubmit={this.handleOnSubmit}>
            <fieldset className="bgColor">
              <h2 className='uk-text-center'>Get In Touch!</h2>
              <div className="uk-form-row">
                <legend>Name</legend>
                <input type="text" placeholder="Your Name" name="name" onChange={this.handleOnChange} value={this.state.name} />
              </div>
              <div className="uk-form-row">
                <legend>Email</legend>
                <input type="email" placeholder="Your Email" name="email" onChange={this.handleOnChange} value={this.state.email} />
              </div>
              <div className="uk-form-row">
                <legend>Message</legend>
                ​<textarea className='textareaSize' rows="15" cols="40" type="txtArea" placeholder="Your Message" name="message" onChange={this.handleOnChange} value={this.state.message} ></textarea>
              </div>
              <input type="submit" value="Send Email" />
            </fieldset>
          </form>

        </div>
        <div>
          { < EmailMsg /> }
        </div>
        <div className= 'uk-position-bottom'>
          { < SocialLinks /> }
        </div>
        <div className='footerOnContact navbar-color uk-text-center uk-position-bottom'>
          <h5 className='fontSize' > When It Comes To Real Estate, Think Of Me - Trushal Chitalia </h5>
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
