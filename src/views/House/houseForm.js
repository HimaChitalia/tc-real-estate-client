
import React, { Component } from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'

async function submitToServer(data) {
  console.log(JSON.stringify({"location": data}))
  try {
    let response = await fetch('http://localhost:3001/api/v1/search', {
      method:'POST',
      headers: {
        // 'Contact-type': 'application/json',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"location": data})
    });
    let responseJson = await response.json();

    return responseJson;
  } catch(error) {
    console.error(error);
  }
}

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

class HouseForm extends Component {
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
    console.log(`state: ${this.state.address}`)
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
      // submit to the server
      submitToServer(this.state)
      .then(data => console.log(data))
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

HouseForm = reduxForm({
  // a unique name for the form
  form: 'house'
})(HouseForm)

export default HouseForm;
