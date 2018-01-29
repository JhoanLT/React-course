import React, { Component } from 'react';

const ENTER_KC = 13;
let ID = 1;
export default class TextBox extends Component {

	constructor(props) {
		super(props);
	}

	handleKeyDown(e) {
		if(e.keyCode === ENTER_KC) {
			let input = this.refs.task_name;
			this.props.addTodo({
				name : input.value,
				id : ID,
			});
			ID ++;
			input.value = "";
		}
	}

	render() {
		return (
			<input 
			ref="task_name"
			type="text" 
			placeholder="Ingresa tu tarea"
			onKeyDown={ this.handleKeyDown.bind(this) } />
		);
	}
}