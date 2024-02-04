import { useState } from 'react';

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

		let error = null;

		if (e.target.value.length > 60) {
			error = 'Максимум 60 символов';
			console.log(error);
		}

		setErrorInputTodo(error);
	};

	const handleBlur = (e) => {
		console.log(e);
		let error = null;
		if (e.target.value.length < 1) {
			error = 'Минимум 1 символ';
		}
		setErrorInputTodo(error);
	};

	const switchTodo = () => {
		setTodoCreated(!todoCreated);
	};

	return {
		requestCreateTodoItem,
		handleChange,
		handleBlur,
		switchTodo,
		todoCreated,
		inputTodo,
		errorInputTodo,
	};
};
