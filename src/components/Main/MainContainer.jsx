import { MainLayout } from './MainLayout';
import { useState } from 'react';
import {
	useArrange,
	useRequestCreateTodo,
	useRequestGetTodo,
	useSearchTodo,
} from '../../hooks/index';

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
		setErrorInputTodo,
	} = useRequestCreateTodo();

	const { todos, errorFetch, isLoader } = useRequestGetTodo(refreshData);

	const { isArrange, switchArrange, getArrangeTodos } = useArrange(todos);

	const { searchInput, handleChangeSearchInput, filtredTodos } =
		useSearchTodo(getArrangeTodos);

	return (
		<MainLayout
			switchTodo={switchTodo}
			todoCreated={todoCreated}
			handleChange={handleChange}
			inputTodo={inputTodo}
			requestCreateTodoItem={requestCreateTodoItem}
			refresher={refresher}
			errorInputTodo={errorInputTodo}
			setErrorInputTodo={setErrorInputTodo}
			handleBlur={handleBlur}
			searchInput={searchInput}
			handleChangeSearchInput={handleChangeSearchInput}
			filtredTodos={filtredTodos}
			switchArrange={switchArrange}
			isArrange={isArrange}
			errorFetch={errorFetch}
			isLoader={isLoader}
		/>
	);
};
