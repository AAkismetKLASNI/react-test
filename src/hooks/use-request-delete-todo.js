import { useEffect } from 'react';

export const useRequestDeleteTodo = (id) => {
	const requestDeleteTodo = () => {
		fetch(`http://localhost:3005/todos/${id}`, { method: 'DELETE' });
	};
	return { requestDeleteTodo };
};
