import { useDispatch, useSelector } from 'react-redux';
import { switchArrangeTodos } from '../actions';
import { isArrangeSelector } from '../selectors';

export const useArrange = (todos) => {
	const dispatch = useDispatch();
	const isArrange = useSelector(isArrangeSelector);

	const switchArrange = () => {
		dispatch(switchArrangeTodos(!isArrange));
	};

	const getArrangeTodos = () => {
		if (isArrange) {
			return todos.map((el) => el).sort((a, b) => (a.title > b.title ? 1 : -1));
		} else {
			return todos;
		}
	};
	return { isArrange, switchArrange, getArrangeTodos };
};
