import React, {Component} from 'react';
import {Glyphicon,PageHeader,Modal,Button} from 'react-bootstrap';
import './index.scss';

import PhotoSwipeComponent from '../../../components/photoSwipe';


export default class View extends Component {
	constructor(props) {
		super(props);
		this.state={
			imgArray:[]
		};
	}
	render() {
		return (
			<article>
				<PhotoSwipeComponent/>
				<div className="cj-img-cont">
					<img src={require('../../../assets/img/feature.jpg')} />
				</div>
				<div id="imgCont" className="cj-img-cont">
					<img src={require('../../../assets/img/1 (1).jpg')} data-original-src={require('../../../assets/img/feature2.jpg')} />
					<img src={require('../../../assets/img/1 (2).jpg')} />
					<img src={require('../../../assets/img/1 (3).jpg')} />
					<img src={require('../../../assets/img/1 (4).jpg')} />
					<img src={require('../../../assets/img/1 (5).jpg')} />
					<img src={require('../../../assets/img/1 (6).jpg')} />
				</div>
			</article>
		);
	}
}