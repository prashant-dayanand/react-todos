import React, { useContext } from "react";
import { TodoListContext } from "../contexts/TodoListContext";
import Todo from "../components/Todo";

const TodoList = () => {
	const { todos } = useContext(TodoListContext);
  console.log(todos);
	return (
		<div>
				{todos.length ? (
          <ul className="list pt-8">
					{todos.map((todo) => {
						return <Todo todo={todo} key={todo.id} />;
					})}
				</ul>
        ) : (
          <p className="text-gray-700 text-center mt-16">OOPS, there is no todo yet. <br></br> Use + button to create todo.</p>
        )}
		</div>
	);
};

export default TodoList;
