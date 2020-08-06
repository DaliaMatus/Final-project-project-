import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import App from './components/app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
