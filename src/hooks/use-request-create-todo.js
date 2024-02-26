import { useState } from 'react';

export const useRequestCreateTodo = (refresher) => {
	const [todoCreated, setTodoCreated] = useState(false);
	const [inputTodo, setInputTodo] = useState('');
	const [errorInputTodo, setErrorInputTodo] = useState('Введите название');

	const requestCreateTodoItem = () => {
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

	const handleChange = ({ target }) => {
		setInputTodo(target.value);

		let error = null;

		if (target.value.length > 60) {
			error = 'Максимум 60 символов';
		}

		setErrorInputTodo(error);
	};

	const handleBlur = ({ target }) => {
		if (target.value.length < 1) {
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
		setErrorInputTodo,
	};
};
