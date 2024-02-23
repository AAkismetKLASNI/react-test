import { useEffect, useState } from 'react';

export const useRequestGetTodos = (refreshData) => {
	const [todos, setTodos] = useState([]);
	const [errorFetch, setErrorFetch] = useState('');
	const [isLoader, setIsLoader] = useState(true);

	useEffect(() => {
		fetch('http://localhost:3500/todos')
			.then((res) => res.json())
			.then((loadedData) => {
				console.log(loadedData);
				setErrorFetch('');
				setTodos(loadedData.reverse());
			})
			.catch(() => {
				setErrorFetch('Не удалось загрузить данные! Подключите 3500 порт!');
			})
			.finally(() => setIsLoader(false));
	}, [refreshData]);

	return { todos, errorFetch, isLoader };
};
