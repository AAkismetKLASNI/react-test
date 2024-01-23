import styles from './Form.module.css';

export const FormLayers = (props) => {
	return (
		<>
			<form className={styles.formValidate} onSubmit={props.onSubmit}>
				<div className={styles.wrapper}>
					<div>
						<p>Введите email</p>
						<input
							name="email"
							type="email"
							placeholder="Введите email"
							value={props.email}
							onChange={props.changeLogin}
							onBlur={props.blurLogin}
							className={styles.inputValidate}
						/>
						{props.errorEmail && (
							<div className={styles.redColorError}>{props.errorEmail}</div>
						)}
					</div>
					<div>
						<p>Введите пароль</p>
						<input
							name="password"
							type="password"
							placeholder="Введите пароль"
							value={props.password}
							onChange={props.changePassword}
							onBlur={props.blurPasswords}
							className={styles.inputValidate}
						/>
						{props.errorPassword && (
							<div className={styles.redColorError}>{props.errorPassword}</div>
						)}
					</div>
					<div>
						<p>Повторите пароль</p>
						<input
							name="confirmPassword"
							type="password"
							placeholder="Подтвердите пароль"
							value={props.replyPassword}
							onChange={props.changeConfirmPassword}
							onBlur={props.blurPasswords}
							className={styles.inputValidate}
						/>
						{props.errorConfirmPassword && (
							<div className={styles.redColorError}>
								{props.errorConfirmPassword}
							</div>
						)}
					</div>
					<button
						type="submit"
						disabled={
							props.errorEmail ||
							props.errorPassword ||
							props.errorConfirmPassword
						}
						className={styles.buttonValidate}
						ref={props.submitButtonRef}
					>
						Зарегистрироваться
					</button>
				</div>
			</form>
		</>
	);
};
