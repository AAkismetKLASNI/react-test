import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormLayers } from './FormLayers';

const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

const fieldsSchema = yup.object().shape({ login: yup.string().matches(re) });

export const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: { login: '', password: '', confirmPassword: '' },
	});

	return <FormLayers />;
};
