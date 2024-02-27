import { useContext } from 'react';
import { RefresherContext } from '../../../../../contexts/all-contexts';
import {
	useRequestUpdateTodo,
	useRequestDeleteTodo,
} from '../../../../../../../hooks/index';
import { TodoChangeLayout, TodoReadyLayout } from './components/index';

export const TodoItemLayout = ({ id, title }) => {
	const refresher = useContext(RefresherContext);

	const {
		inputTitleChange,
		changeInputTitle,
		handleBlurChangeInput,
		errorInputTitleChange,
		requestUpdateTodo,
		setIsTodoChange,
		isTodoChange,
	} = useRequestUpdateTodo(refresher, title);

	const { requestDeleteTodo } = useRequestDeleteTodo(refresher);

	if (isTodoChange) {
		return (
			<TodoChangeLayout
				id={id}
				inputTitleChange={inputTitleChange}
				changeInputTitle={changeInputTitle}
				handleBlurChangeInput={handleBlurChangeInput}
				errorInputTitleChange={errorInputTitleChange}
				requestUpdateTodo={requestUpdateTodo}
			/>
		);
	} else {
		return (
			<TodoReadyLayout
				id={id}
				title={title}
				setIsTodoChange={setIsTodoChange}
				requestDeleteTodo={requestDeleteTodo}
			/>
		);
	}
};
