import { useEffect } from 'react';

export const useRequestDeleteTodo = (id) => {
	const RequestDeleteTodo = () => {
		useEffect(() => {
			fetch(`http://localhost:3005/todos/${id}`, { method: 'DELETE' });
		}, []);
	};
};
