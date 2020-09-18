import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Global } from '@emotion/core';

import * as serviceWorker from './serviceWorker';

import globalStyles from './stylesheets/globalStyles';
import App from './App';
import configureStore from './store'; 

const store = configureStore({});
console.log('Initial State: ', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={globalStyles}/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
