import styles from './Form.module.css';

export const Form = () => {
	return (
		<>
			<form>
				<p>Введите email</p>
				<div className={styles.form}>
					<input type="" />
					<div>1</div>
				</div>
				<p>Введите пароль</p>
				<input type="password" />
				<p>Повторите пароль</p>
				<input type="password" />
			</form>
		</>
	);
};
