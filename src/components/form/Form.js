import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormLayers } from './FormLayers';

const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

const fieldsSchema = yup.object().shape({
	login: yup
		.string()
		.matches(re, 'Недопустимые выражения')
		.min(10, 'Длина минимум 10 символов')
		.max(30, 'Длина максимум 30 символов'),
	password: yup
		.string()
		.min(6, 'Длина минимум 6 символов')
		.max(20, 'Длина максимум 20 символов'),
	confirmPassword: yup
		.string()
		.min(6, 'Длина минимум 6 символов')
		.max(20, 'Длина максимум 20 символов'),
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
	console.log(dataErrors);

	return <FormLayers dataErrors={dataErrors} />;
};
