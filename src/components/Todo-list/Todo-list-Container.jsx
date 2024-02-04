import { TodoListLayout } from './Todo-list-Layout';

export const TodoListContainer = ({
	todo,
	todoCreated,
	refresher,
	requestCreateTodoItem,
	inputTodo,
	handleChange,
}) => {
	return (
		<TodoListLayout
			todo={todo}
			todoCreated={todoCreated}
			refresher={refresher}
			requestCreateTodoItem={requestCreateTodoItem}
			inputTodo={inputTodo}
			handleChange={handleChange}
		/>
	);
};
