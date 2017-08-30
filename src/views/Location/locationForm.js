// node modules
import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// custom modules
import { submitToServer } from '../../actions/Location'
// import { API_URL } from '../../global';
// import Location from '../../redux/reducers/reducer_location';

const renderField = ({ type, label, input, meta: { touched, error }}) => (
    <div className="input-row">
      <br />
      <label>{label}</label>
      <br />
      <input {...input} type={ type }/>
      { touched && error &&
       <span className="error">{ error }</span>}
    </div>
  )

class LocationForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      address: '',
      city: '',
      state: ''
    }
  }

  handleOnChange = event => {
   this.setState({
     [event.target.name]: event.target.value
   });
 }

  submit = ({ address='', city='', state=''}) => {
    // console.log(`state: ${this.state.address}`)
    let error = {};
    let isError = false;

    if (address.trim() === '') {
      error.address = 'Required';
      isError = true;
    }

    if (city.trim() === '') {
      error.city = 'Required';
      isError = true;
    }

    if (state.trim() === '') {
      error.state = 'Required';
      isError = true;
    }

    if (isError) {
      throw new SubmissionError(error);
    } else {
      console.log('submitting')
      submitToServer('/search', this.state)
    }
  }

  render() {
    return (
      <form onSubmit={ this.props.handleSubmit(this.submit) }>
        <Field name="address" label='Address: ' component={renderField} type="text" onChange={this.handleOnChange} />
        <Field name="city" label='City: ' component={renderField} type="text" onChange={this.handleOnChange}/>
        <Field name="state" label='State: ' component={renderField} type="text" onChange={this.handleOnChange}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

LocationForm = reduxForm({
  form: 'location'
})(LocationForm)

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { submitToServer }, dispatch);
};

export default connect(null, mapDispatchToProps)(LocationForm)
