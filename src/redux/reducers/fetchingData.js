export default (state= {
  loadingData: false
}, action) => {
  switch(action.type) {

    case 'MAKING_API_REQUEST':
    return Object.assign({}, state, {
      loadingData: true
    });

    case 'SUCCESSFUL_API_REQUEST':
    return Object.assign({}, state, {
      loadingData: true
    });

    default:
      return state;
  }
}
