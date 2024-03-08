import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getTodos,
	setRequestError,
	DROP_LOADER,
	getTodosAsync,
} from '../actions';
import {
	todoDeletedSelector,
	todoEmptySelector,
	todoUpdatedSelector,
} from '../selectors';

export const useRequestGetTodo = () => {
	const dispatch = useDispatch();
	const todoEmpty = useSelector(todoEmptySelector);
	const todoDeleted = useSelector(todoDeletedSelector);
	const todoUpdated = useSelector(todoUpdatedSelector);

	useEffect(() => {
		dispatch(getTodosAsync(getTodos, setRequestError, DROP_LOADER));
	}, [todoEmpty, todoDeleted, todoUpdated]);
};
