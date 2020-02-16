import React, { Component } from 'react'

class TechList extends Component {
	/*
		usado para guardar/manipular o estado do componente
	*/
	state = {
		techs: [
			'NodeJS',
			'ReactJS',
			'React Native'
		]
	};

	render() {

		console.log(this.state)
		return (
			<ul>
				<li>NodeJS</li>
				<li>ReactJS</li>
				<li>React Native</li>
			</ul>
		);
	}
}

export default TechList;