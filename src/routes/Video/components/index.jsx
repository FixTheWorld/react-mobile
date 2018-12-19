import React, {Component} from 'react';
import {Glyphicon,PageHeader,Modal,Button,ButtonGroup} from 'react-bootstrap';
import './index.scss';
import "video-react/dist/video-react.css";
import { Player,BigPlayButton } from 'video-react';

export default class View extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<article className="cj-video">
				<Player
					fluid={false}
					playsInline
					poster={require('../../../assets/img/play.png')}
					src={require('../../../assets/test.mp4')}
					width='100%'
					height={200}
				>
					<BigPlayButton position="center" />
				</Player>
			</article>
		);
	}
}