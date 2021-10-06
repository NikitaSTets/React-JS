import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Car from './car.js';

class Garage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			date: new Date(),
			isToggleOn: true
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}	

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
			)}

		render(){
			const carInfo = [
			{
				name: "Audi", 
				model: "A6"
			},
			{
				name: "BMW", 
				model: "I7"
			},
			{
				name: "Reno", 
				model: "Logan"
			}
			];
			
			
			const element = React.createElement(
				'h6',
				{className: 'greeting'},
				'Hello, world!'
				);

			return(
				<div>
				<h1> Who lives in my Garage {this.state.date.toLocaleTimeString()}?</h1>

				{
					carInfo.map((car, index) => (
					<li> 
					<Car brand={car} />
					</li>
					))
				}

				<h2> Time now is {element} {new Date().toLocaleTimeString()}</h2>
				{
					this.state.isToggleOn &&
					<h1> dasa</h1>
				}
				The user is <b>{this.state.isToggleOn  ? 'currently' : 'not'}</b> logged in.

				<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
				</button>
				</div>
				);
			}
		}

		ReactDOM.render(
		<Garage />,
		document.getElementById('root')
		);
