import React, { Component } from 'react';
IMPORT { connect } from 'react-redux';

class LocationDetails extends Componenet {
  renderLocation() {
    return this.props.location.map((category) => {
      return category.map((item) => {
        <li key={item.name} className="list-group-itm"> { item.name } </li>
      })
    })
   }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderLocation}
      </ul>
    )
  }
}

function mapStateToProps(state){
  console.log(state.location)
  //whatever is returned will show up as props inside a LOcation details
  return {
    location: state.location
  }
}

export default connect(mapStateToProps)(LocationDetails)
