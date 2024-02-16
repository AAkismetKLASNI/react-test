import { useState } from 'react';
import { set, ref } from 'firebase/database';
import { db } from '../firebase';

export const useRequestUpdateTodo = (title) => {
	const [isTodoChange, setIsTodoChange] = useState(false);
	const [inputTitleChange, setInputTitleChange] = useState(title);
	const [errorInputTitleChange, setErrorInputTitleChange] = useState(null);

	const requestUpdateTodo = (id, title) => {
		const todosDbRef = ref(db, `todos/${id}`);

		set(todosDbRef, {
			title: title,
		}).then(() => setIsTodoChange(false));
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
