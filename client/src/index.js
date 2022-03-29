import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const theme = createTheme();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
