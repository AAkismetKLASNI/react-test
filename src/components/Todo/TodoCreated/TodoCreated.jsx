import styles from '../Todo-Item.module.css';

export const TodoCreated = (props) => {
	return (
		<li className={styles.TodoItem}>
			<div className={styles.ContainerMini}>
				<input
					className={styles.InputTodo}
					value={props.inputTodo}
					onChange={props.handleChange}
					onBlur={props.handleBlur}
					placeholder="Название"
				/>
				{props.errorInputTodo && (
					<span style={{ color: 'red' }}>{props.errorInputTodo}</span>
				)}
				<button
					className={styles.ButtonCreateTodo}
					onClick={() => props.requestCreateTodoItem(props.refresher)}
					disabled={props.errorInputTodo}
				>
					Подтвердить
				</button>
			</div>
		</li>
	);
};
