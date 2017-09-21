import { API_URL } from '../global';

export const changeOrder = updatedObject => {
    return {
        type: 'CHANGE_ORDER',
        updatedObject
    };
};

export function updateArticleLikesAndDislikes(data) {
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
   .then(updatedObject => {
       dispatch(changeOrder(updatedObject));
      //  console.log(emailMessage)
      //  dispatch(sentEmail(emailMessage));
   })
  //  .catch(err => dispatch(errorEmail()));
  }
}
