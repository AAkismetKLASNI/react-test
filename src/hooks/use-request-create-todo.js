import { useState } from 'react';
import * as yup from 'yup';

const validateInput = yup
	.string()
	.min(1, 'Минимум 1 символ')
	.max(30, 'Максимум 30 символов');

export const useRequestCreateTodo = () => {
	const [todoCreated, setTodoCreated] = useState(false);
	const [inputTodo, setInputTodo] = useState('');
	const [errorInputTodo, setErrorInputTodo] = useState('');

	const requestCreateTodoItem = (refresher) => {
		fetch('http://localhost:3500/todos', {
			method: 'POST',
			headers: { 'Content-type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: inputTodo,
			}),
		}).then(() => {
			setInputTodo('');
			setTodoCreated(false);
			refresher();
		});
	};

	const handleChange = (e) => {
		setInputTodo(e.target.value);
	};

	const switchTodo = () => {
		setTodoCreated(!todoCreated);
		console.log('state', todoCreated);
	};

	return {
		requestCreateTodoItem,
		handleChange,
		switchTodo,
		todoCreated,
		inputTodo,
	};
};
