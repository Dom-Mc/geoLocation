import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/app.scss';

ReactDOM.render(
  <App />,
  document.getElementById('react-container')
);
