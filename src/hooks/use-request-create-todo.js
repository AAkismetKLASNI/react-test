import { useState } from 'react';
import { push, ref } from 'firebase/database';
import { db } from '../firebase';

export const useRequestCreateTodo = () => {
	const [todoCreated, setTodoCreated] = useState(false);
	const [inputTodo, setInputTodo] = useState('');
	const [errorInputTodo, setErrorInputTodo] = useState('Введите название');

	const requestCreateTodoItem = () => {
		const todosDbRef = ref(db, 'todos');

		push(todosDbRef, {
			title: inputTodo,
		}).then(() => {
			setTodoCreated(false);
			setInputTodo('');
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
