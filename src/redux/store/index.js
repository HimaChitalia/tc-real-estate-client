import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
// import auth from '../modules/Auth/reducer';

const reducers = combineReducers({
  // auth,
  form: formReducer
})

const middleware = [thunk]

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)

export default store;