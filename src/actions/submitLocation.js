import { API_URL } from '../global';
import { makingAPIRequest, successfulAPIRequest, unsuccessfulAPIRequest } from './apiRequest';

export const getLocationDetails = locationInfo => {
    return {
        type: 'GET_LOCATION_DETAILS',
        locationInfo
    };
};

export function submitLocationToServer(url, data) {

  return dispatch => {
    dispatch(makingAPIRequest());
    return fetch(API_URL + url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"location": data})
   })
      .then(response => response.json())
      .then(locationInfo => {
          dispatch(successfulAPIRequest());
          dispatch(getLocationDetails(locationInfo));
      })
      .catch(err => dispatch(unsuccessfulAPIRequest()));
  }
}
