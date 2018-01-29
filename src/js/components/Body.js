import React, { Component } from 'react';
import TextBox from './TextBox';
import TodoList from './TodoList';

export default class Body extends Component {
	constructor(props){
		super(props);
		this.state = {
			todos : [],
		};
	}

	addTodo(todo) {
		this.state.todos.push({name: todo.name, id: todo.id});
		this.setState({todos: this.state.todos});
	}

	removeTodo(todoId) {
		let newTodos = this.state.todos.filter((todo) => {
			return todo.id !== todoId;
		});
		this.setState({todos: newTodos});
	}

	render() {

		return (
			<div>
				<h1>This is the Jako's ToDo list App</h1>
				<div>
					<TextBox addTodo={this.addTodo.bind(this)} />
					<hr />
					<TodoList todos={this.state.todos} removeTodo={this.removeTodo.bind(this)} />
				</div>
			</div>
		);
	}
}