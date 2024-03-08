import { useDispatch, useSelector } from 'react-redux';
import { handleSearchInput } from '../actions';
import { searchInputSelector } from '../selectors';

export const useSearchTodo = (getArrangeTodos) => {
	const dispatch = useDispatch();
	const searchInput = useSelector(searchInputSelector);

	const filteredTodos = () =>
		getArrangeTodos().filter((todo) =>
			todo?.title.toLowerCase().includes(searchInput.toLowerCase()),
		);

	const handleChangeSearchInput = ({ target }) => {
		dispatch(handleSearchInput(target.value));
	};

	return { searchInput, handleChangeSearchInput, filteredTodos };
};
