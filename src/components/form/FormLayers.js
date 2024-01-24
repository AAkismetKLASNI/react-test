import styles from './Form.module.css';

export const FormLayers = ({
	loginError,
	passwordError,
	confirmPasswordError,
	register,
	handleSubmit,
	sendFormData,
}) => {
	return (
		<>
			<form
				className={styles.formValidate}
				onSubmit={handleSubmit(sendFormData)}
			>
				<div className={styles.wrapper}>
					<div>
						<p>Введите email</p>
						<input
							name="email"
							type="email"
							{...register('login')}
							placeholder="Введите email*"
							className={styles.inputValidate}
						/>
						{loginError && (
							<div className={styles.redColorError}>{loginError}</div>
						)}
					</div>
					<div>
						<p>Введите пароль</p>
						<input
							name="password"
							type="password"
							{...register('password')}
							placeholder="Введите пароль*"
							className={styles.inputValidate}
						/>
						{passwordError && (
							<div className={styles.redColorError}>{passwordError}</div>
						)}
					</div>
					<div>
						<p>Повторите пароль</p>
						<input
							name="confirmPassword"
							type="password"
							{...register('confirmPassword')}
							placeholder="Подтвердите пароль*"
							className={styles.inputValidate}
						/>
						{confirmPasswordError && (
							<div className={styles.redColorError}>{confirmPasswordError}</div>
						)}
					</div>
					<button
						type="submit"
						className={styles.buttonValidate}
						disabled={!!loginError || !!passwordError || !!confirmPasswordError}
					>
						Зарегистрироваться
					</button>
				</div>
			</form>
		</>
	);
};
