import { useState, useRef } from 'react';
import { FormLayers } from './FormLayers';

const sendFromData = (formData) => {
	console.log(formData);
};

export const Form = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [errorsFormData, setErrorsFromData] = useState({
		errorEmail: 'Заполните обязательное поле',
		errorPassword: 'Заполните обязательное поле',
		errorConfirmPassword: 'Заполните обязательное поле',
	});

	const submitButtonRef = useRef(null);

	const { email, password, confirmPassword } = formData;
	const { errorEmail, errorPassword, errorConfirmPassword } = errorsFormData;

	const changeLogin = ({ target }) => {
		setFormData({ ...formData, email: target.value });

		let error = null;

		if (target.value.length > 30) {
			error = 'Недопустимая длина. Максимум 30 символов';
		}

		setErrorsFromData({
			...errorsFormData,
			errorEmail: error,
		});
	};

	const blurLogin = ({ target }) => {
		if (!target.value.length) {
			setErrorsFromData({
				...errorsFormData,
				errorEmail: 'Поле с email не может быть пустым.',
			});
		} else if (target.value.length < 8) {
			setErrorsFromData({
				...errorsFormData,
				errorEmail: 'Минимальная длина 8 символов',
			});
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(target.value)
		) {
			setErrorsFromData({
				...errorsFormData,
				errorEmail: 'Недопустимые выражения.',
			});
		}

		if (!errorEmail && !errorPassword && !errorConfirmPassword) {
			submitButtonRef.current.focus();
		}
	};

	const changePassword = ({ target }) => {
		setFormData({ ...formData, password: target.value });

		let error = null;

		if (target.value.length > 15) {
			error = 'Максимальная длина 15 символов';
		}

		setErrorsFromData({ ...errorsFormData, errorPassword: error });
	};

	const changeConfirmPassword = ({ target }) => {
		setFormData({ ...formData, confirmPassword: target.value });

		let error = null;

		if (target.value.length > 15) {
			error = 'Максимальная длина 15 символов';
		}

		setErrorsFromData({ ...errorsFormData, errorConfirmPassword: error });
	};

	const blurPasswords = ({ target }) => {
		if (target.name === 'password') {
			if (!target.value.length) {
				setErrorsFromData({
					...errorsFormData,
					errorPassword: 'Поле с паролем не может быть пустым',
				});
			} else if (target.value.length < 6) {
				setErrorsFromData({
					...errorsFormData,
					errorPassword: 'Минимальная длина 6 символов',
				});
			}
		} else if (target.name === 'confirmPassword') {
			if (!target.value.length) {
				setErrorsFromData({
					...errorsFormData,
					errorConfirmPassword: 'Поле с паролем не может быть пустым',
				});
			} else if (target.value.length < 6) {
				setErrorsFromData({
					...errorsFormData,
					errorConfirmPassword: 'Минимальная длина 6 символов',
				});
			} else if (password && confirmPassword && password !== confirmPassword) {
				setErrorsFromData({
					...errorsFormData,
					errorConfirmPassword: 'Пароли не совпадают',
				});
			}
		}
		if (!errorEmail && !errorPassword && !errorConfirmPassword) {
			submitButtonRef.current.focus();
		}
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log({ email, password });
	};

	return (
		<FormLayers
			{...formData}
			{...errorsFormData}
			changeLogin={changeLogin}
			blurLogin={blurLogin}
			changePassword={changePassword}
			blurPasswords={blurPasswords}
			changeConfirmPassword={changeConfirmPassword}
			onSubmit={onSubmit}
			submitButtonRef={submitButtonRef}
		/>
	);
};
