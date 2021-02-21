import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'
import './index.css';
import App from './App';
import Show from './components/Show'
import MovieDetails from './components/MovieDetails'
import reportWebVitals from './reportWebVitals';

const store = createStore(
  reducers, // Aqui van todos los reducers
  {}, // Estado inicial
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
