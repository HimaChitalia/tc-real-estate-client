import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocationDetails extends Component {
  showLocationInfo = () => {
    const { visiable, hospitalsArray, restaurantsArray, pharmaciesArray, schoolsArray, trainsArray } = this.props
      console.log( hospitalsArray )
      return visiable === true ?
      <div>
        <h1> Hospitals </h1>
        <ul>
          { hospitalsArray.map(hospital => <li key={hospital.key}>{ hospital.name }</li>) }
        </ul>
        <h1> Train Station </h1>
        <ul>
          { trainsArray.map(train => <li key={train.key}>{ train.name }</li>) }
        </ul><h1> Pharmacies </h1>
        <ul>
          { pharmaciesArray.map(pharmacy => <li key={pharmacy.key}>{ pharmacy.name }</li>) }
        </ul><h1> Schools </h1>
        <ul>
          { schoolsArray.map(school => <li key={school.key}>{ school.name }</li>) }
        </ul><h1> Restaurants </h1>
        <ul>
          { restaurantsArray.map(restaurant => <li key={restaurant.key}>{ restaurant.name }</li>) }
        </ul>
      </div> :
      <div >
        <h1 > NO info </h1>
      </div>
   }

   render() {
    //  console.log(this.props)
     // hospitalsArray: state.locations.hosp,
     // trainsArray: state.locations.trains,
     // schoolsArray: state.locations.schools,
     // pharmaciesArray: state.locations.pharmacies,
     // restaurantsArray: state.locations.restaurants
     return (
       <div>
        {this.showLocationInfo()}
      </div>
     )
   }
 }

function mapStateToProps(state){
  // console.log(state)
  //whatever is returned will show up as props inside a LOcation details
  return {
    visiable :state.locations.infoVisible,
    locationArray: state.locations,
    hospitalsArray: state.locations.hospitals,
    trainsArray: state.locations.trains,
    schoolsArray: state.locations.schools,
    pharmaciesArray: state.locations.pharmacies,
    restaurantsArray: state.locations.restaurants
  }
}

export default connect(mapStateToProps, null)(LocationDetails)
