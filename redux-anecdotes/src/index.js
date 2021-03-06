import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'


// import { createStore } from 'redux'
// import reducer from './reducers/anecdoteReducer'

// const store = createStore(reducer)
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)