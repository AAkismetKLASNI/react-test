import { useDispatch } from 'react-redux';
import { deleteTodoAsync, deleteTodo } from '../actions';

export const useRequestDeleteTodo = () => {
	const dispatch = useDispatch();

	const requestDeleteTodo = (id) => {
		dispatch(deleteTodoAsync(id, deleteTodo));
	};

	return { requestDeleteTodo };
};
