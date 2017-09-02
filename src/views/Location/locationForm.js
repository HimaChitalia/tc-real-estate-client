// node modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// custom modules
import { submitLocationToServer } from '../../actions/submitLocation';
import LocationDetails from './locationDetails';

class SearchLocationInfo extends Component {

  constructor(props){
    super(props)
    this.state = {
      address: '',
      city: '',
      state: ''
    }
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.submitLocationToServer('/search', this.state)
    this.setState({address: '', city: '', state: ''})
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <div className='uk-position-center locationFormMargin'>    
          <form className="uk-form" onSubmit={this.handleOnSubmit}>
            <fieldset className="bgColor">
              <h2 className='uk-text-center'>Search here for any location to know nearby amenities!</h2>
              <div className="uk-form-row">
                <legend>Address</legend>
                <input type="text" placeholder="Street Address" name="address" onChange={this.handleOnChange} value={this.state.address} />
              </div>
              <div className="uk-form-row">
                <legend>City</legend>
                <input type="text" placeholder="city" name="city" onChange={this.handleOnChange} value={this.state.city} />
              </div>
              <div className="uk-form-row">
                <legend>State</legend>
                <input type="text" placeholder="State" name="state" onChange={this.handleOnChange} value={this.state.state} />
              </div>
              <input type="submit" value="Add Location" />
            </fieldset>
          </form>
        </div>
        <div>
          { < LocationDetails /> }
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { submitLocationToServer }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchLocationInfo)
