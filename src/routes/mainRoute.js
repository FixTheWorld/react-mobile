/**
 * Created by changjin.zhang on 9/12/2017.
 */
import {Route,IndexRoute} from 'react-router';
import React,{Component} from 'react';
import App from './app';
import Home from './Home';
import Demo from './Demo';
import Upload from './Upload';
import Pdf from './Pdf';
import Image from './Image';
import Charts from './Charts';
import Paint from './Paint';
import Video from './Video';
import Music from './MusicIndex';

const mainRoute=(store)=>({
	path:'/',
	indexRoute:Home(store),
	component:App,
	childRoutes:[
		Demo(store),
		Upload(store),
		Pdf(store),
		Image(store),
		Charts(store),
		Paint(store),
		Video(store),
		Music(store)
	]
});
export default mainRoute;