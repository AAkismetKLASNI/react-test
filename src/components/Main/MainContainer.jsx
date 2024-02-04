import { MainLayout } from './MainLayout';
import { useRequestGetTodo } from '../../hooks/use-request-get-todo';
import { useRequestCreateTodo } from '../../hooks/use-request-create-todo';
import { useState } from 'react';

export const MainContainer = () => {
	const [refreshData, setRefreshData] = useState(false);
	const refresher = () => {
		setRefreshData(!refreshData);
		console.log('WE', refreshData);
	};

	const {
		switchTodo,
		handleChange,
		todoCreated,
		inputTodo,
		requestCreateTodoItem,
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
		/>
	);
};
