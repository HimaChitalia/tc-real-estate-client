import { API_URL } from '../global';

export const makeAPIRequestToGetNews = () => {
    return {
        type: 'MAKE_API_REQUEST_TO_GET_NEWS'
    };
};

export const clearNews = () => {
    return {
        type: 'CLEAR_NEWS'
    };
};

export const receivedNews = (news) => {
    return {
        type: 'RECEIVED_NEWS',
        news
    };
};

export const errorNews = () => {
    return {
        type: 'ERROR_NEWS'
    };
};


export function fetchNews() {
  return dispatch => {
    dispatch(makeAPIRequestToGetNews());
    dispatch(clearNews());
    return fetch(API_URL + '/news', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      // body: JSON.stringify({ data })
   })
      .then(response => response.json())
      .then(newsDetails => {
          console.log(newsDetails)
          dispatch(receivedNews(newsDetails));
      })
      .catch(err => dispatch(errorNews()));
  }
}
