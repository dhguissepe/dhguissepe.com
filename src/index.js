import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './js/App.js'
import store from './redux/store.js'
import './scss/styles.scss'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))