import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
// import auth from '../modules/Auth/reducer';
import promise from 'redux-promise';

import fetchingData from '../reducers/fetchingData';
import locations from '../reducers/locationReducer';
import route from '../reducers/routeReducer'

const reducers = combineReducers({
  // auth,
  fetchingData,
  form: formReducer,
  locations,
  route
})

const middlewares = [thunk, promise]

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares)
)

export default store;
