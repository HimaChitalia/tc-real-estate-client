import { API_URL } from '../global';

// export const clearLocationDetails = () => {
//     return {
//         type: 'CLEAR_LOCATION_DETAILS',
//     };
// };
//
// export const getLocationDetails = locationInfo => {
//     return {
//         type: 'GET_LOCATION_DETAILS',
//         locationInfo
//     };
// };

export function updateArticleLikes(data) {
  debugger;
  return dispatch => {
    // dispatch(makingAPIRequest());
    // dispatch(clearLocationDetails());
    console.log(JSON.stringify({"article": data}))
    return fetch(API_URL + '/newsupdate', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"article": data})
   })
      // .then(response => response.json())
      // .then(locationInfo => {
      //     // dispatch(successfulAPIRequest());
      //     // dispatch(getLocationDetails(locationInfo));
      // })
      // .catch(err => dispatch(unsuccessfulAPIRequest()));
  }
}
