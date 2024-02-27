import { useState } from 'react';

export const useRequestUpdateTodo = (refresher, title) => {
	const [isTodoChange, setIsTodoChange] = useState(false);
	const [inputTitleChange, setInputTitleChange] = useState(title);
	const [errorInputTitleChange, setErrorInputTitleChange] = useState(null);

	const requestUpdateTodo = (id, title) => {
		fetch(`http://localhost:3500/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-type': 'application/json:charset=utf-8' },
			body: JSON.stringify({ title: title }),
		}).then(() => {
			setIsTodoChange(false);
			refresher();
		});
	};

	const changeInputTitle = ({ target }) => {
		setInputTitleChange(target.value);

		let error = null;

		if (target.value.length > 60) {
			error = 'Максимум 60 символов';
		}
		setErrorInputTitleChange(error);
	};

	const handleBlurChangeInput = ({ target }) => {
		if (target.value.length < 1) {
			setErrorInputTitleChange('Поле не может быть пустым');
		}
	};

	return {
		requestUpdateTodo,
		isTodoChange,
		setIsTodoChange,
		changeInputTitle,
		inputTitleChange,
		errorInputTitleChange,
		handleBlurChangeInput,
	};
};
