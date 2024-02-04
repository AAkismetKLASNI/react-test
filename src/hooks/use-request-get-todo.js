import { useEffect, useState } from 'react';

export const useRequestGetTodo = (refreshData) => {
	const [todo, setTodo] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3500/todos')
			.then((res) => res.json())
			.then((loadedData) => {
				setTodo(loadedData.reverse());
			});
	}, [refreshData]);
	return { todo };
};
