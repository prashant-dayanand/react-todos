import React, { useContext } from "react";
import { TodoListContext } from "../contexts/TodoListContext";
const Todo = ({ todo }) => {
	const { removeTodo, findTodo } = useContext(TodoListContext);

	return (
		<li className="flex items-center justify-between bg-gray-900 py-4 px-8 rounded-lg m-4">
			<p>{todo.text} </p>
			<div>
				<button
					className=" btn-delete task-btn"
					onClick={() => removeTodo(todo.id)}
				>
					<i className="fas fa-trash-alt mr-6 hover:text-blue-500"></i>
				</button>
				<button className="btn-edit task-btn" onClick={() => findTodo(todo.id)}>
					<i className="fas fa-pen hover:text-pink-500"></i>
				</button>
			</div>
		</li>
	);
};

export default Todo;
