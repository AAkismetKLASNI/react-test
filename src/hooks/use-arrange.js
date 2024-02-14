import { useState } from 'react';

export const useArrange = (todos) => {
	const [isArrange, setIsArrange] = useState(false);

	const switchArrange = () => {
		setIsArrange(!isArrange);
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
