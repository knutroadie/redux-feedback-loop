import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

// Feeling
const Feeling = (state = 0, action) => {
    if (action.type === 'FEELING') {
        return action.payload
    }
    return state;
}

// Understanding
const Understanding = (state = 0, action) => {
    if (action.type === 'UNDERSTANDING') {
        return action.payload
    }
    return state;
}

// Supported
const Supported = (state = 0, action) => {
    if (action.type === 'SUPPORTED') {
        return action.payload
    }
    return state;
}

// Comments
const Comments = (state = '', action) => {
    if (action.type === 'COMMENTS') {
        return action.payload
    }
    return state;
}

// Submit
const Submit = (state = [], action) => {
    if (action.type === 'SUBMIT') {
        return action.payload
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        Feeling,
        Understanding,
        Supported,
        Comments,
        Submit
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();