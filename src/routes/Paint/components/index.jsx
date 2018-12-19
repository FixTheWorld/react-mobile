import React, {Component} from 'react';
import {Glyphicon,PageHeader,Modal,Button,ButtonGroup} from 'react-bootstrap';
import './index.scss';
import $ from '../../../common/jquery-vendor';
import jSignature from 'jsignature';


export default class View extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		$("#signature").jSignature({color:"#090a0a",lineWidth:1});
	}
	clear(){
		$("#signature").jSignature('clear');
	}
	importData(){
		const sig=$("#signature");
		$("#import").attr({"src":sig.jSignature('getData'),'class':'cj-import-img'});
	}
	render() {
		return (
			<article className="cj-paint">
				sign here:
				<div id="signature" className="cj-sign">

				</div>
				<ButtonGroup style={{margin:"10px 0"}}>
					<Button onClick={this.clear}>Clear</Button>
					<Button onClick={this.importData}>Import</Button>
				</ButtonGroup>
				<img id="import" className=""/>
			</article>
		);
	}
}