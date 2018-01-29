import React, { Component } from 'react';


const Todo = ({todo, removeTodo}) => {
	return (
		<li onClick={() => removeTodo(todo.id)}>{todo.name}</li>
	);
};

export default Todo;