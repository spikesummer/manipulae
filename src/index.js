import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/app/App'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userProcura from './features/procura'

const store = configureStore({
  reducer:{
    procura: userProcura
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store } >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);