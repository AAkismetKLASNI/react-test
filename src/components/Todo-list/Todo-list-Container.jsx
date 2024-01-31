import { useEffect, useState } from 'react';
import { TodoListLayout } from './Todo-list-Layout';

export const TodoListContainer = () => {
	const [todo, setTodo] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3005/todos')
			.then((rawResponse) => rawResponse.json())
			.then((loadedData) => {
				console.log(loadedData);
				setTodo(loadedData);
			});
	}, []);

	return <TodoListLayout todo={todo} />;
};
