import React, { useContext, useState, useEffect } from "react";
import { TodoListContext } from "../contexts/TodoListContext";

const TodoForm = () => {
	const { addTodo, editTodo, editTodos } = useContext(TodoListContext);
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
    if(editTodos === null) {
      addTodo(text);
		setText("");
    } else {
      editTodo(text, editTodos.id)
    }
		
	};

	const handleChange = (e) => {
		setText(e.target.value);
	};

	useEffect(() => {
		if (editTodos !== null) {
			setText(editTodos.text);
		} else {
			setText("");
		}
	}, [editTodos]);

	return (
		<form
			action=""
			className="flex items-center justify-center"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				placeholder="Add your todos..."
				value={text}
				onChange={handleChange}
				className="py-2 px-4 rounded-full bg-gray-700"
				required
			/>
			<div class="ml-6">
				<button type="submit" className="mr-2">
          {editTodos ? <i class="fas fa-edit text-4xl text-pink-400"></i> : <i className="fas fa-plus-circle text-4xl text-blue-400"></i>}				
				</button>
			</div>
		</form>
	);
};

export default TodoForm;
