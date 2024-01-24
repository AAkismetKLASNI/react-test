import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormLayers } from './FormLayers';

const sendFormData = (formData) => {
	console.log(formData);
};

const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

const validationMessage = 'Поле не может быть пустым';

const setLengthMessage = (min, max) => `Длина от ${min} до ${max} символов`;

const fieldsSchema = yup.object().shape({
	login: yup
		.string()
		.required(validationMessage)
		.min(10, setLengthMessage(10, 30))
		.max(30, setLengthMessage(10, 30))
		.matches(re, 'Недопустимые выражения'),
	password: yup
		.string()
		.required(validationMessage)
		.min(8, setLengthMessage(8, 25))
		.max(25, setLengthMessage(8, 25)),
	confirmPassword: yup
		.string()
		.required(validationMessage)
		.oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
		.min(8, setLengthMessage(8, 25))
		.max(25, setLengthMessage(8, 25)),
});

export const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: { login: '', password: '', confirmPassword: '' },
		resolver: yupResolver(fieldsSchema),
	});

	const loginError = errors.login?.message;
	const passwordError = errors.password?.message;
	const confirmPasswordError = errors.confirmPassword?.message;
	const dataErrors = { loginError, passwordError, confirmPasswordError };

	return (
		<FormLayers
			{...dataErrors}
			register={register}
			handleSubmit={handleSubmit}
			sendFormData={sendFormData}
		/>
	);
};
