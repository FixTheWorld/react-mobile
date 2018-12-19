import React,{Component} from 'react';
import '../index.scss';
import {InputGroup,FormControl,Button,Glyphicon} from 'react-bootstrap';
import Product from './ProductsView';
import './Products.scss';

export default class Demo extends Component{
	constructor(props){
		super(props);
	}
	testApi(){
		this.props.actions.testApi((data)=>console.log('way to get data 1:callbackFunction',data));
	}
	render(){
		const data=this.props.data.json;
		data&&console.log('way to get data 2:mapStateToProps(container.js)',data);
		const {loading}=this.props.ui;
		return (
			<article className="cj-main">
				<Button onClick={this.testApi.bind(this)}>API</Button>
				{loading?'loading data':''}
				<div style={{wordBreak:'break-all'}}>{data?'data:'+JSON.stringify(data):''}</div>
				<Product />
			</article>
		);
	}
}