
import React, { Component } from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'

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
  
class ContactForm extends Component {
  
  submit = ({ address='', city='', state='', zipCode='' }) => {
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
    
    if (zipCode.trim() === '') {
      error.zipCode = 'Required';
      isError = true;
    }
    
    if (isError) {
      throw new SubmissionError(error);
    } else {
      // submit to the server
    }
    
  }
  
  render() {
    return (
      <form onSubmit={ this.props.handleSubmit(this.submit) }>
        <Field name="address" label='Address: ' component={renderField} type="text" />
        <Field name="city" label='City: ' component={renderField} type="text" />
        <Field name="state" label='State: ' component={renderField} type="text" />
        <Field name="zipCode" label='Zipcode: ' component={renderField} type="text" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm;
