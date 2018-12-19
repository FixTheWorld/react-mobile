import React, {Component} from 'react';
import './index.scss';
import { Document,Page } from 'react-pdf/build/entry.webpack';
import PropTypes from 'prop-types';

export default class View extends Component {
	static propTypes={
		file:PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.object
		]).isRequired
	};

	constructor(props){
		super(props);
		this.state = {
			numPages: null,
			loading:'none',
			pageNumber:1,
			rate:1
		}
	}

	showError(e){
		console.log(e);
	}

	onDocumentLoad(pdf) {
		const numPages=pdf.numPages;
		this.setState({ numPages });
	}

	showPage(){
		let pageArr=[];
		const {rate}=this.state;
		const w=window.outerWidth;
		const width=w*rate;
		if(this.state.numPages) {
			for (let i = 1; i <= this.state.numPages; i++) {
				pageArr.push(<Page key={i} width={width} pageNumber={i}/>);
			}
			return pageArr;
		}
	}

	zoom(type) {
		const {rate}=this.state;
		let newRate;
		if (type==='increase') {
			newRate=rate + 0.5;
			newRate=newRate>2.5?2.5:newRate;
		}else if(type==='initial') {
			newRate=1;
		}else{
			newRate=rate-0.5;
			newRate=newRate<0.5?0.5:newRate;
		}
		this.setState({rate:newRate});
	}

	render() {
		const { rate } = this.state;
		const w=window.outerWidth;
		const width=w*rate;
		return (
			<article className="cj-component-pdf">
				<section className="cj-pdf-cont" style={{width:width}}>
					<Document
						file={this.props.file}
						onLoadSuccess={this.onDocumentLoad.bind(this)}
						onLoadError={this.showError.bind(this)}
						loading={<div className="cj-loading">Loading..</div>}
					>
						{this.showPage()}
					</Document>
				</section>

				<footer className="cj-pdf-menu">
					<button onClick={this.zoom.bind(this,'increase')}>+</button>
					<button onClick={this.zoom.bind(this,'initial')}>Initial</button>
					<button onClick={this.zoom.bind(this,'decrease')}>-</button>
				</footer>
			</article>
		);
	}
}