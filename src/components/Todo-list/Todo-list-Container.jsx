import { useEffect, useState } from 'react';
import { TodoListLayout } from './Todo-list-Layout';

export const TodoListContainer = () => {
	const [todo, setTodo] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then((rawResponse) => rawResponse.json())
			.then((loadedData) => {
				setTodo(loadedData);
			});
	}, []);

	return <TodoListLayout {...todo} />;
};
