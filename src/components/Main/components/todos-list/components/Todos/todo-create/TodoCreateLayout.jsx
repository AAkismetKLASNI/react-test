import styles from '../Todo-Item.module.css';

export const TodoCreateLayout = () => {
	return (
		<li className={styles.TodoItem}>
			<div className={styles.ContainerMini}>
				<input
					className={styles.inputTodo}
					value={inputTodo}
					onChange={handleChange}
					onBlur={handleBlur}
					placeholder="Название"
				/>
				{errorInputTodo && (
					<span style={{ color: 'red' }}>{errorInputTodo}</span>
				)}
				<button
					className={styles.buttonCreateTodo}
					onClick={() => requestCreateTodoItem(refresher)}
					disabled={errorInputTodo}
				>
					Подтвердить
				</button>
			</div>
		</li>
	);
};
