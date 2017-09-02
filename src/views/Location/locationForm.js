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

    console.log(this.props)
    const { visiable } = this.props

    return (
      <div>
        <div className='uk-position-center locationFormMargin'>
          <form className="uk-form" onSubmit={this.handleOnSubmit}>
            <fieldset className="bgColor">
              <h2 className='uk-text-center'>Search Here For Any Location To Know Nearby Amenities!</h2>
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
        </div> { visiable === false ?
        <div className='sideText navbar-color uk-text-center uk-position-bottom'>
          <h5 className='fontSize' > When It Comes To Real Estate, Think Of Me - Trushal Chitalia </h5>
        </div> :
        <div></div> }
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { submitLocationToServer }, dispatch);
};

function mapStateToProps(state){
  console.log(state.locations.infoVisible)
  return {
    visiable: state.locations.infoVisible
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchLocationInfo)
