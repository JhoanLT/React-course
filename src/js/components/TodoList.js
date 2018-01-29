import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {

	render() {
		const {todos} = this.props;
		return (
			<div>
				<div class="tl-header">Tareas</div>
				<div class="tl-body">
					<ul class="todo-list">
						{ todos.map(todo => <Todo key={todo.id} todo={todo} removeTodo={this.props.removeTodo} />) }
					</ul>
				</div>
			</div>
		);
	}
}