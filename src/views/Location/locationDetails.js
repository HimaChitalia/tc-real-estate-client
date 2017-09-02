import React, { Component } from 'react';
import { connect } from 'react-redux';
import Location from './location'
import '../../styles/custom.css'

class LocationDetails extends Component {

  cap = (str) => {
      return str.split(' ').map(function (e) {
          return e.replace(/([a-z])/, function (match, value) {
              return value.toUpperCase();
          })
      }).join(' ');
  }

  showLocationInfo = () => {
    const { visiable, loadingData, location, hospitalsArray, restaurantsArray, pharmaciesArray, schoolsArray, trainsArray } = this.props

      return visiable === true ?

      <div className='locationDetailsMargin'>
        <h2 >Location Address: { this.cap(location.address) }, { this.cap(location.city) }, {location.state.toUpperCase()}</h2>
        <h4> Hospitals </h4>
          { this.showInfo(hospitalsArray) }
        <h4> Train Station </h4>
          { this.showInfo(trainsArray) }
        <h4> Pharmacies </h4>
          { this.showInfo(pharmaciesArray) }
        <h4> Schools </h4>
          { this.showInfo(schoolsArray) }
        <h4> Restaurants </h4>
          { this.showInfo(restaurantsArray) }
      </div> : loadingData === true ?
        <div className='uk-position-bottom-center'> <h2 > Loading Location Information.. </h2> </div> :
        <div className='uk-position-bottom-center'> </div>
   }

   showInfo = (array) => {
     return <table className="uk-table uk-table-middle uk-table-divider uk-table-striped uk-table-responsive">
              <thead>
                <tr>
                  <th className="uk-table-expand">Name</th>
                  <th className="uk-table-expand">Address</th>
                  <th >Distance (from location)</th>
                  <th >Travel Time (driving)</th>
                </tr>
              </thead>
            <tbody>
                {array.map(element => <Location key={element.key} location={element} />)}
            </tbody>
          </table>
   }

   render() {
     return (
       <div>
        {this.showLocationInfo()}
      </div>
     )
   }
 }

function mapStateToProps(state){
  console.log(state.locations.hospitals)
  return {
    loadingData: state.fetchingData.loadingData,
    location: state.locations.location,
    visiable: state.locations.infoVisible,
    locationArray: state.locations,
    hospitalsArray: state.locations.hospitals,
    trainsArray: state.locations.trains,
    schoolsArray: state.locations.schools,
    pharmaciesArray: state.locations.pharmacies,
    restaurantsArray: state.locations.restaurants
  }
}

export default connect(mapStateToProps, null)(LocationDetails)
