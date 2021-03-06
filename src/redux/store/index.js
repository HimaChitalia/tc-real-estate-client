import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import fetchingData from '../reducers/fetchingData';
import locations from '../reducers/locationReducer';
import contacts from '../reducers/contactReducer';
import news from '../reducers/newsReducer';
import route from '../reducers/routeReducer'

const reducers = combineReducers({
  fetchingData,
  locations,
  contacts,
  news,
  route
})

const middlewares = [thunk, promise]

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares)
)

export default store;
