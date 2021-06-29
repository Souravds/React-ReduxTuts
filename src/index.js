import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
//Use Provider for => React communicate with Redux
import { Provider } from 'react-redux';
//Use Reducer for => Modify and Derived state data from it
import nameReducer from './reducers/nameReducer';
import wishReducer from './reducers/wishReducer';
import thunk from 'redux-thunk';

// Create Redux Store and pass the reducer state values
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//Compose enhancer ( to use redux dev tools and thunk at the same time)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Use of combineReducer
const masterReducer = combineReducers({
  name: nameReducer,
  wish: wishReducer
})

const store = createStore(masterReducer,{name:'srv', wish: ['sleep','guitar']}, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
