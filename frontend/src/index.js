import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './components/calls/reducers';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

//Redux is a predictable state container designed to help you write JavaScript apps 
//that behave consistently across client, server, and native environments and are easy to test.
//While it's mostly used as a state management tool with React, 
//you can use it with any other JavaScript framework or library.
//https://react-redux.js.org/introduction/quick-start

//We are using Redux for Handling html Requests with thunk

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            < App/>
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
