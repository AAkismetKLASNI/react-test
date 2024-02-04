import { MainLayout } from './MainLayout';
import { useRequestGetTodo } from '../../hooks/use-request-get-todo';
import { useRequestCreateTodo } from '../../hooks/use-request-create-todo';
import { useState } from 'react';

export const MainContainer = () => {
	const [refreshData, setRefreshData] = useState(false);
	const refresher = () => {
		setRefreshData(!refreshData);
	};

	const {
		switchTodo,
		handleChange,
		todoCreated,
		inputTodo,
		requestCreateTodoItem,
		errorInputTodo,
		handleBlur,
	} = useRequestCreateTodo();

	const { todo } = useRequestGetTodo(refreshData);

	return (
		<MainLayout
			todo={todo}
			switchTodo={switchTodo}
			todoCreated={todoCreated}
			handleChange={handleChange}
			inputTodo={inputTodo}
			requestCreateTodoItem={requestCreateTodoItem}
			refresher={refresher}
			errorInputTodo={errorInputTodo}
			handleBlur={handleBlur}
		/>
	);
};
