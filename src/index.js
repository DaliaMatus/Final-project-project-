import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './style/main.scss';
import App from './components/app';
import store from './components/store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
