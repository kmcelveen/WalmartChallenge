import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {createStore } from 'redux'
import App from './public/components/app'
import getReducers from './public/reducers/reducers'



const store = createStore(getReducers);

render(
  <Provider store = {store}>
    <App/>
  </Provider>, 
  document.getElementById('app'))