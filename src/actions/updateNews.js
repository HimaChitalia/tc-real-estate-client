import { API_URL } from '../global';



export const changeOrder = () => {
    return {
        type: 'CHANGE_ORDER'
    };
};

export function updateArticleLikes(data) {
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
   .then(response => response.json())
   .then(updateMessage => {
       dispatch(changeOrder());
      //  console.log(emailMessage)
      //  dispatch(sentEmail(emailMessage));
   })
  //  .catch(err => dispatch(errorEmail()));
  }
}
