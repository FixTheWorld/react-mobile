import React,{Component} from 'react';
import '../index.scss';
import {InputGroup,FormControl,Button,Glyphicon} from 'react-bootstrap';
import Chart from 'chart.js';
import Header from '../../../components/Header/index';

export default class Demo extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		const ctx=document.querySelector("#mainCanvas");
		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],//xAxis
				datasets: [{
					label: '# of Votes',//mark of data
					data: [12, 19, 3, 5, 2, 3],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 1
				},{
					type:'line',
					label:'type2',
					data:[10,3,20,5,6],
					fill:false,
					borderColor:'#48ff6d',
					borderWidth:'1px'
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});
		const ctx2=document.querySelector("#secondCanvas");
		new Chart(ctx2, {
			type: 'pie',
			data: {
				labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],//xAxis
				datasets: [{
					label: '# of Votes',//mark of data
					data: [12, 19, 3, 5, 2, 3],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 1
				},{
					type:'doughnut',
					label: '# of Votes',//mark of data
					data: [12, 19, 3, 5, 2, 3],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 1
				}]
			}
		});


	}

	render(){
		return (
			<article className="cj-charts">
				<canvas id="mainCanvas">

				</canvas>
				<canvas id="secondCanvas">

				</canvas>
			</article>
		);
	}
}