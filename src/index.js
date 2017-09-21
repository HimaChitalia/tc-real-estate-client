//node modules import
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

//custom module imports
import './styles/uikit.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './views/App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
