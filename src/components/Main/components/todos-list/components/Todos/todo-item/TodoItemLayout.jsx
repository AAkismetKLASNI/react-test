import {
	useRequestUpdateTodo,
	useRequestDeleteTodo,
} from '../../../../../../../hooks/index';
import { TodoChangeLayout, TodoReadyLayout } from './components/index';

export const TodoItemLayout = ({ id, title, isChange }) => {
	const {
		changeInputTitle,
		errorInputTitleChange,
		handleBlurChangeInput,
		inputTitleChange,
		requestOnSaveTodo,
		requestOnChangeTodo,
	} = useRequestUpdateTodo();

	const { requestDeleteTodo } = useRequestDeleteTodo();

	if (isChange) {
		return (
			<TodoChangeLayout
				id={id}
				inputTitleChange={inputTitleChange}
				changeInputTitle={changeInputTitle}
				handleBlurChangeInput={handleBlurChangeInput}
				errorInputTitleChange={errorInputTitleChange}
				requestOnSaveTodo={requestOnSaveTodo}
			/>
		);
	} else {
		return (
			<TodoReadyLayout
				id={id}
				title={title}
				requestDeleteTodo={requestDeleteTodo}
				requestOnChangeTodo={requestOnChangeTodo}
			/>
		);
	}
};
