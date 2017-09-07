import { API_URL } from '../global';

export function updateArticleLikes(data) {
  debugger;
  return dispatch => {
    console.log(JSON.stringify({"article": data}))
    return fetch(API_URL + '/newsupdate', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"article": data})
   })
  }
}
