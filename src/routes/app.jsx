/**
 * Created by changjin.zhang on 9/13/2017.
 */
import React,{Component} from 'react';
import '../scss/common.scss';
import Header from '../components/Header';
export default ({children})=>{
	return (
		<div style={{height:'100%'}}>
			<Header />
			{children}
		</div>
	)
}