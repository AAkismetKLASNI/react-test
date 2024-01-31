import { useEffect } from 'react';

export const useRequestDeleteTodo = (id) => {
	const requestDeleteTodo = () => {
		useEffect(() => {
			fetch(`http://localhost:3005/todos/${id}`, { method: 'DELETE' });
		}, []);
	};
};
