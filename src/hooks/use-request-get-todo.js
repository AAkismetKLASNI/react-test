import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const useRequestGetTodo = () => {
	const [todos, setTodos] = useState([]);
	const [errorFetch, setErrorFetch] = useState('');
	const [isLoader, setIsLoader] = useState(true);

	useEffect(() => {
		const todosDbRef = ref(db, 'todos');

		return onValue(todosDbRef, (snapshot) => {
			const loadedTodos = snapshot.val();

			if (!loadedTodos) {
				setTodos([]);
				setIsLoader(false);
				return;
			}

			const parsedLoadedTodosest = Object.entries(loadedTodos)
				.map(([id, { title }]) => {
					return { id, title };
				})
				.reverse();

			console.log(parsedLoadedTodosest);

			setTodos(parsedLoadedTodosest);
			setIsLoader(false);
		});
	}, []);

	return { todos, errorFetch, isLoader };
};
