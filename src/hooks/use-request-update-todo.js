import { useDispatch, useSelector } from 'react-redux';
import {
	inputTitleChangeSelector,
	todoChangeSelector,
	errorInputTitleChangeSelector,
} from '../selectors';
import {
	isTodoChangeAct,
	inputTitleChangeAct,
	errorInputTitleChangeAct,
	updateTodoAsync,
	requestOnUpdateTodoAsync,
} from '../actions';

export const useRequestUpdateTodo = () => {
	const isTodoChange = useSelector(todoChangeSelector);
	const inputTitleChange = useSelector(inputTitleChangeSelector);
	const errorInputTitleChange = useSelector(errorInputTitleChangeSelector);

	const dispatch = useDispatch();

	const requestOnSaveTodo = (id, title) => {
		dispatch(updateTodoAsync(id, title, isTodoChangeAct));
	};

	const requestOnChangeTodo = (id, title) => {
		dispatch(
			requestOnUpdateTodoAsync(id, title, inputTitleChangeAct, isTodoChangeAct),
		);
	};

	const changeInputTitle = ({ target }) => {
		dispatch(inputTitleChangeAct(target.value));
		let error = null;
		if (target.value.length > 60) {
			error = 'Максимум 60 символов';
		}
		dispatch(errorInputTitleChangeAct(error));
	};

	const handleBlurChangeInput = ({ target }) => {
		if (target.value.length < 1) {
			dispatch(errorInputTitleChangeAct('Поле не может быть пустым'));
		}
	};

	return {
		requestOnSaveTodo,
		isTodoChange,
		changeInputTitle,
		inputTitleChange,
		errorInputTitleChange,
		handleBlurChangeInput,
		requestOnChangeTodo,
	};
};
