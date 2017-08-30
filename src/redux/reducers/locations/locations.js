export default function updateLocation(state = {}, action){
  switch(action.type){
    case 'GET_LOCATION_DETAILS':
      console.log(action.payload)
      break;
    case 'ERROR_LOCATION':
      console.log(action.payload)
      break;
      default: {
        return {
          ...state
        }
      }
  }
}
