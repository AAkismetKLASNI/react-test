import { MainLayout } from './MainLayout';
import { useState } from 'react';
import {
	useArrange,
	useRequestCreateTodo,
	useRequestGetTodos,
	useSearchTodo,
	useRequestUpdateTodo,
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

	const { todos, errorFetch, isLoader } = useRequestGetTodos(refreshData);

	const { isArrange, switchArrange, getArrangeTodos } = useArrange(todos);

	const { searchInput, handleChangeSearchInput, filtredTodos } =
		useSearchTodo(getArrangeTodos);

	const {
		setInputTitleChange,
		setIsTodoChange,
		isTodoChange,
		requestUpdateTodo,
		changeInputTitle,
		inputTitleChange,
		errorInputTitleChange,
		handleBlurChangeInput,
	} = useRequestUpdateTodo(refresher);

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
			setInputTitleChange={setInputTitleChange}
			setIsTodoChange={setIsTodoChange}
			isTodoChange={isTodoChange}
			requestUpdateTodo={requestUpdateTodo}
			changeInputTitle={changeInputTitle}
			inputTitleChange={inputTitleChange}
			errorInputTitleChange={errorInputTitleChange}
			handleBlurChangeInput={handleBlurChangeInput}
		/>
	);
};
