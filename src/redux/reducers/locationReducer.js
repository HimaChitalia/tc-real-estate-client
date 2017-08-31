export default function updateLocation(state = {
  trains: [],
  hospitals: [],
  pharmacies: [],
  schools: [],
  restaurants: [],
  errorOccured: false,
  infoVisible: false
  }, action){
  switch(action.type){

    case 'GET_LOCATION_DETAILS':
    return Object.assign({}, state, {
      trains: action.locationInfo.trains,
      hospitals: action.locationInfo.hospitals,
      pharmacies: action.locationInfo.pharmacies,
      schools: action.locationInfo.schools,
      restaurants: action.locationInfo.restaurants,
      infoVisible: true
    });

    case 'ERROR_LOCATION':
    return Object.assign({}, state, {
      errorOccured: true
    });
      default: {
        return {
          ...state
        }
      }
  }
}
