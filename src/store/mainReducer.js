/**
 * Created by changjin.zhang on 9/12/2017.
 */
import {combineReducers} from 'redux';

function mainReducer(state={}){
	return state;
}
export default function makeReducer(reducers){
	return combineReducers({mainReducer,...reducers});
}

export function injectReducer(store,{key,reducer}){
	if (Object.hasOwnProperty.call(store.asyncReducers, key)) return
	store.asyncReducers[key]=reducer;
	store.replaceReducer(makeReducer(store.asyncReducers));
}