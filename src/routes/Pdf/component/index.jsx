import React, {Component} from 'react';
import '../scss/index.scss';
import Pdf from '../../../components/Pdf';
import Header from '../../../components/Header/index';

export default class View extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const file=require('../../../assets/Form1.pdf');
		return (
			<Pdf file={file} />
		);
	}
}