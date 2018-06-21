import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const ininitalState = {};

const middleware = [thunk];

const store = createStore(rootReducer, ininitalState, applyMiddleware(...middleware));

export default store;
