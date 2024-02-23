import { useMatch } from 'react-router-dom';
import {
	useRequestUpdateTodo,
	useRequestDeleteTodo,
} from '../../../hooks/index';
import { MainTodoLayout } from './MainTodoLayout';

export const MainTodoContainer = ({
	refresher,
	setIsTodoChange,
	isTodoChange,
	requestUpdateTodo,
	changeInputTitle,
	inputTitleChange,
	errorInputTitleChange,
	handleBlurChangeInput,
}) => {
	const urlIdTodo = useMatch('/todo/:id').params.id;

	const { requestDeleteTodo } = useRequestDeleteTodo(refresher);

	return (
		<MainTodoLayout
			setIsTodoChange={setIsTodoChange}
			isTodoChange={isTodoChange}
			requestUpdateTodo={requestUpdateTodo}
			changeInputTitle={changeInputTitle}
			inputTitleChange={inputTitleChange}
			errorInputTitleChange={errorInputTitleChange}
			handleBlurChangeInput={handleBlurChangeInput}
			requestDeleteTodo={requestDeleteTodo}
			urlIdTodo={urlIdTodo}
		/>
	);
};
