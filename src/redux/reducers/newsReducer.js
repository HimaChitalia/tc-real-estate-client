export default function updateLocation(state = {
  news: [],
  makeReq: false,
  errorRec: false,
  recvdResp: false
  }, action){

  switch(action.type){

    case 'MAKE_API_REQUEST_TO_GET_NEWS':
    return Object.assign({}, state, {
      makeReq: true
    });

    case 'CLEAR_NEWS':
    return Object.assign({}, state, {
      news: [],
      recvdResp: false
    });

    case 'RECEIVED_NEWS':
    return Object.assign({}, state, {
      recvdResp: true,
      news: action.news
    });

    case 'ERROR_NEWS':
    return Object.assign({}, state, {
      errorRec: true
    });
      default: {
        return {
          ...state
        }
      }
  }
}
