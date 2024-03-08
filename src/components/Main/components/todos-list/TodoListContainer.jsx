import { TodoListLayout } from './TodoListLayout';
import { useSelector } from 'react-redux';
import {
	isLoaderSelector,
	errorFetchSelector,
	todoCreatedSelector,
	todosSelector,
} from '../../../../selectors';
import { useSearchTodo, useArrange } from '../../../../hooks';

export const TodoListContainer = () => {
	const isLoader = useSelector(isLoaderSelector);
	const errorFetch = useSelector(errorFetchSelector);
	const todoCreated = useSelector(todoCreatedSelector);
	const todos = useSelector(todosSelector);

	const { getArrangeTodos } = useArrange(todos);
	const { filteredTodos } = useSearchTodo(getArrangeTodos);

	return (
		<TodoListLayout
			isLoader={isLoader}
			errorFetch={errorFetch}
			todoCreated={todoCreated}
			filteredTodos={filteredTodos}
		/>
	);
};
