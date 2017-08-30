import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocationDetails extends Component {
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
  console.log(state.locations)
  //whatever is returned will show up as props inside a LOcation details
  return {
    location: state.locations
  }
}

export default connect(mapStateToProps)(LocationDetails)
