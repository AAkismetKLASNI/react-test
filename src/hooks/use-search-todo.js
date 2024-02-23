import { useState } from 'react';

export const useSearchTodo = (getArrangeTodos) => {
	const [searchInput, setSearchInput] = useState('');

	const handleChangeSearchInput = ({ target }) => {
		setSearchInput(target.value);
	};

	const filtredTodos = () =>
		getArrangeTodos().filter((todo) =>
			todo.title?.toLowerCase().includes(searchInput.toLowerCase()),
		);

	return { searchInput, handleChangeSearchInput, filtredTodos };
};
