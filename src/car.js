import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor(props) {
    super(props);
  	this.state = {color: "red"};
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {

    return (
    	<div>
    		<h2>Hi, I am a {this.state.color} {this.props.brand.name}  {this.props.brand.model} Car!</h2>  
       		<button type="button" onClick={this.changeColor}>Change color</button>
        </div>
);
  }
}

export default Car;