import React, {Component} from 'react';
import browserHistory from '../../history';
import {Button,ButtonGroup,ListGroup,ListGroupItem,Glyphicon,Badge} from 'react-bootstrap';
import '../scss/index.scss';
export default ({props})=> {
	return (
		<article className="cj-home">
			<ListGroup>
				<ListGroupItem onClick={() => browserHistory.push('/demo')}>
					mongoDB<Badge><Glyphicon glyph="menu-right" /></Badge>
				</ListGroupItem>
				<ListGroupItem onClick={() => browserHistory.push('/pdf')}>
					pdf<Badge><Glyphicon glyph="menu-right" /></Badge>
				</ListGroupItem>
				<ListGroupItem onClick={() => browserHistory.push('/upload')}>
					upload<Badge><Glyphicon glyph="menu-right" /></Badge>
				</ListGroupItem>
				<ListGroupItem onClick={() => browserHistory.push('/charts')}>
					charts<Badge><Glyphicon glyph="menu-right" /></Badge>
				</ListGroupItem>
				<ListGroupItem onClick={() => browserHistory.push('/image')}>
					image<Badge><Glyphicon glyph="menu-right" /></Badge>
				</ListGroupItem>
				<ListGroupItem onClick={() => browserHistory.push('/paint')}>
					paint<Badge><Glyphicon glyph="menu-right" /></Badge>
				</ListGroupItem>
				<ListGroupItem onClick={() => browserHistory.push('/video')}>
					video<Badge><Glyphicon glyph="menu-right" /></Badge>
				</ListGroupItem>
			</ListGroup>
		</article>
	)
}