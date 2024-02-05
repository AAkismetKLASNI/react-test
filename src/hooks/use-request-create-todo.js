import { useState } from 'react';

export const useRequestCreateTodo = () => {
	const [todoCreated, setTodoCreated] = useState(false);
	const [inputTodo, setInputTodo] = useState('');
	const [errorInputTodo, setErrorInputTodo] = useState('Введите название');

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
		if (e.target.value.length < 1) {
			setErrorInputTodo('Поле не может быть пустым');
		}
	};

	const switchTodo = () => {
		setTodoCreated(!todoCreated);
		setErrorInputTodo('Введите название');
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
