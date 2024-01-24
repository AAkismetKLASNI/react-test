import styles from './Form.module.css';

export const FormLayers = (props) => {
	return (
		<>
			<form className={styles.formValidate}>
				<div className={styles.wrapper}>
					<div>
						<p>Введите email</p>
						<input
							name="email"
							type="email"
							placeholder="Введите email"
							className={styles.inputValidate}
						/>
						{1 && <div className={styles.redColorError}>1</div>}
					</div>
					<div>
						<p>Введите пароль</p>
						<input
							name="password"
							type="password"
							placeholder="Введите пароль"
							className={styles.inputValidate}
						/>
						{1 && <div className={styles.redColorError}>{1}</div>}
					</div>
					<div>
						<p>Повторите пароль</p>
						<input
							name="confirmPassword"
							type="password"
							placeholder="Подтвердите пароль"
							className={styles.inputValidate}
						/>
						{1 && <div className={styles.redColorError}>{1}</div>}
					</div>
					<button type="submit" className={styles.buttonValidate}>
						Зарегистрироваться
					</button>
				</div>
			</form>
		</>
	);
};
