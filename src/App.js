import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoListProvider from "./contexts/TodoListContext";
function App() {
	return (
		<TodoListProvider>
			<section class="bg-black min-h-screen text-white px-3 py-16">
				<div className="container mx-auto">
					<h2 className="text-gray-500 mb-8 text-4xl text-center">Save your todos now</h2>
					<div className="todo_app ">
						<TodoForm />
						<TodoList />
					</div>
				</div>
			</section>
		</TodoListProvider>
	);
}

export default App;
