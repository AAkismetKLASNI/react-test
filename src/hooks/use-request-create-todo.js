import { useDispatch, useSelector } from 'react-redux';
import {
	changeErrorCreateTodo,
	setInputTodo,
	createTodoAsync,
	toggleTodoCreated,
} from '../actions';
import {
	inputTodoSelector,
	todoCreatedSelector,
	errorInputTodoFetch,
} from '../selectors';

export const useRequestCreateTodo = () => {
	const dispatch = useDispatch();
	const todoCreated = useSelector(todoCreatedSelector);
	const inputTodo = useSelector(inputTodoSelector);
	const errorInputTodo = useSelector(errorInputTodoFetch);

	const requestCreateTodoItem = () => {
		dispatch(createTodoAsync(inputTodo, setInputTodo, toggleTodoCreated));
	};

	const handleChange = ({ target }) => {
		dispatch(setInputTodo(target.value));

		let error = null;

		if (target.value.length > 60) {
			error = 'Максимум 60 символов';
		}

		dispatch(changeErrorCreateTodo(error));
	};

	const handleBlur = ({ target }) => {
		if (target.value.length < 1) {
			dispatch(changeErrorCreateTodo('Поле не может быть пустым'));
		}
	};

	const switchTodo = () => {
		dispatch(toggleTodoCreated(!todoCreated));
		dispatch(changeErrorCreateTodo('Введите название'));
	};

	return {
		requestCreateTodoItem,
		handleChange,
		handleBlur,
		switchTodo,
		todoCreated,
		inputTodo,
		errorInputTodo,
	};
};
