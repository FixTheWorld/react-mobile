/**
 * Created by changjin.zhang on 9/12/2017.
 */
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import makeReducer from './mainReducer';
const middleware=[thunk,createLogger()];
const store=createStore(makeReducer(),{},compose(applyMiddleware(...middleware)));
store.asyncReducers = {};
store.replaceReducer(makeReducer(store.asyncReducers));
export default store;