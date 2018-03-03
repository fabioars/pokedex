import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import all from './modules/all';
import pokedex from './modules/pokedex';

const reducer = combineReducers({
    all,
    pokedex
});

const enhancer = compose(
    applyMiddleware(thunk),
    persistState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

export default createStore(reducer, enhancer)