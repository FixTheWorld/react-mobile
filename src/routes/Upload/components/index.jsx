import React, {Component} from 'react';
import {Glyphicon,PageHeader,Modal,Button} from 'react-bootstrap';
import './index.scss';
export default class View extends Component {
	constructor(props) {
		super(props);
		this.state={
			imgList:[],
			showDialog:false,
			img:''
		};
		this.fileArray=[];
		this.fileDomArray=[];
		this.choseImg=this.choseImg.bind(this);
		this.addFile=this.addFile.bind(this);
		this.delImg=this.delImg.bind(this);
		this.uploadImg=this.uploadImg.bind(this);
	}
	addFile(){
		this.fileDOM.click();
	}
	delImg(index){
		const list=this.state.imgList;
		list.splice(index,1);
		this.setState({imgList:list});
		this.plusBtn.removeAttribute('class');
		this.fileArray.length--;
	}
	showImg(img){
		this.setState({showDialog:true,img:<img className="cj-img" src={img} />})
	}
	choseImg(e){
		const files=e.target.files;
		console.log('f',files);
		let totalFileLength=files.length+this.fileArray.length;
		if(totalFileLength>8) {
			this.notice.innerHTML='more than 8 pics!';
			return;
		}else if(totalFileLength===8){
			this.plusBtn.setAttribute('class','cj-hide');
		}
		this.notice.innerHTML='';
		Array.prototype.map.call(files,(v,i)=>{
			const key=Math.random();
			const reader=new FileReader();
			reader.readAsDataURL(v);
			reader.onload=(e)=>{
				this.fileArray.push(v);
				const index=this.fileArray.length-1;
				const li=<Img key={key} t={index} src={e.target.result} click={()=>this.showImg(e.target.result)} del={()=>this.delImg(index)} />;
				this.fileDomArray.push(li);
				this.setState({imgList:this.fileDomArray});
			};
		});
	}
	uploadImg(){
		const files=this.fileArray;
		if(files.length===0) {
			this.notice.innerHTML = 'no files!';
			return;
		}
		let formData=new FormData();
		Array.prototype.map.call(files,(v,i)=>{
			formData.append('image',v);
		});
		this.props.actions.uploadImages(formData,(data)=>{
			this.notice.innerHTML=data.errorMessage+"<br/>";
			data.data.map((v,i)=>{
				let a=document.createElement('a');
				a.href=v;
				a.style='display:block';
				a.target='_blank';
				a.innerHTML='images'+(i+1);
				this.notice.appendChild(a);
			});
		});
	}
	render() {
		return (
			<article className="container">
				<PageHeader>Upload images</PageHeader>
				<Modal className="cm-dialog"
				       backdrop
				       show={this.state.showDialog}
				       onHide={()=>this.setState({showDialog:false})}
				>
					<Modal.Body>
						<Glyphicon glyph="remove" onClick={()=>this.setState({showDialog:false})} className="cm-close-dialog" />
						{this.state.img}
					</Modal.Body>
				</Modal>
				<input style={{display:'none'}}
				       ref={t=>this.fileDOM=t}
					   type="file" accept="image/*"
					   capture="camera"
					   multiple
					   onChange={this.choseImg}
				/>
				<ul className="cj-preview" ref={t=>this.previewDiv=t}>
					{this.state.imgList}
					<li ref={t=>this.plusBtn=t}>
						<div onClick={this.addFile}>
							<Glyphicon glyph="plus" />
						</div>
					</li>
				</ul>
				(Max 8 Pics)
				<div className="cj-notice" ref={t=>this.notice=t}>

				</div>
				{this.props.ui.loading?'uploading':''}
				<footer className="cj-bottom">
					<button className="cm-btn" onClick={this.uploadImg}>Upload</button>
				</footer>
			</article>
		);
	}
}

const Img=(props)=>(
	<li>
		<div onClick={props.click}>
			<img id={props.t} className="cj-img" src={props.src}/>
		</div>
		<span onClick={props.del} className="cj-del">×</span>
	</li>
);