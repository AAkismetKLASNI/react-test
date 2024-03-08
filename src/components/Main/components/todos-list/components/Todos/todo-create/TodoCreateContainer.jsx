import { TodoCreateLayout } from './TodoCreateLayout';
import { useRequestCreateTodo } from '../../../../../../../hooks/';

export const TodoCreateContainer = () => {
	const {
		inputTodo,
		handleChange,
		handleBlur,
		errorInputTodo,
		requestCreateTodoItem,
	} = useRequestCreateTodo();

	return (
		<TodoCreateLayout
			inputTodo={inputTodo}
			handleChange={handleChange}
			handleBlur={handleBlur}
			errorInputTodo={errorInputTodo}
			requestCreateTodoItem={requestCreateTodoItem}
		/>
	);
};
