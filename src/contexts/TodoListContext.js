import { useState, createContext, useEffect } from "react";

export const TodoListContext = createContext();

const initialState = JSON.parse(localStorage.getItem('todos')) || []

const TodoListContextProvider = (props) => {
	const [todos, setTodos] = useState(initialState);

	const [editTodos, setEditTodos] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

	//Create a new todo
	const addTodo = (text) => {
		setTodos([{ text: text, id: Math.floor(Math.random() * 10000) }, ...todos]);
	};

	//Remove a specific todo
	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	//Find todos
	const findTodo = (id) => {
		const updateTodo = todos.find((todo) => todo.id === id);
    setEditTodos(updateTodo)
	};

  //Edit Todos
  const editTodo = (text, id) => {
    const newTodos = todos.map(todo => (todo.id === id ? { text, id } : todo))

    setTodos(newTodos)
    setEditTodos(null)
  }

	return (
		<TodoListContext.Provider value={{ todos, addTodo, removeTodo, editTodo, findTodo, editTodos }}>
			{props.children}
		</TodoListContext.Provider>
	);
};

export default TodoListContextProvider;
