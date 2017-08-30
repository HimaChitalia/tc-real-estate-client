// import React from 'react'
// import { Field, reduxForm, SubmissionError } from 'redux-form';

// import { stopFetchingData, startFetchingData } from '../fetchingData';
import { API_URL } from '../../global';

export function submitToServer(url, data) {

  console.log(JSON.stringify({"location": data}))
    return dispatch => {
      fetch(API_URL + url, {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"location": data})
    }).then(function(response) {
          if (response.status >= 400) {
              console.log("Error " + response.status + " in the AJAX call")
              throw new Error("Bad response from server");
          }
          const responseJson = response.json()
          console.log(responseJson)
          dispatch({
              type  : 'GET_LOCATION_DETAILS',
              payload : response.json()
          });
      })
      .catch(function(error) {
          dispatch({
              type  : 'ERROR_LOCATION',
              payload : error
          });
      });
    }
}
