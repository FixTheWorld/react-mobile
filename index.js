/**
 * Created by changjin.zhang on 6/12/2017.
 */
import React,{Component} from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import store from './src/store/createStore';
import history from './src/routes/history';
const routes=require('./src/routes/mainRoute').default(store);
let render=()=>{
	ReactDOM.render(
		<Provider store={store}>
			<Router history={history} children={routes} />
		</Provider>,
		document.querySelector("#root")
	);
};
render();
if (module.hot) {
    module.hot.accept('./src/routes/mainRoute',()=>{
	    ReactDOM.unmountComponentAtNode(document.querySelector("#root"));
	    render();
    });
}