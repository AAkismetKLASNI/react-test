import styles from '../Todo-Item.module.css';

export const TodoCreateLayout = ({
	inputTodo,
	handleChange,
	handleBlur,
	errorInputTodo,
	requestCreateTodoItem,
}) => {
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
					onClick={() => requestCreateTodoItem()}
					disabled={errorInputTodo}
				>
					Подтвердить
				</button>
			</div>
		</li>
	);
};
