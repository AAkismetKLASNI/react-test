import styles from '../../../Todo-Item.module.css';

export const TodoReadyLayout = ({
	id,
	title,
	requestDeleteTodo,
	requestOnChangeTodo,
}) => {
	return (
		<li className={styles.TodoItem}>
			<div className={styles.ContainerMini}>
				<div key={id}>{title}</div>
				<div className={styles.ContainerOperation}>
					<span
						className={styles.EditTodo}
						onClick={() => requestOnChangeTodo(id, title)}
					>
						И
					</span>
					<span
						className={styles.DeleteTodo}
						onClick={() => requestDeleteTodo(id)}
					>
						-
					</span>
				</div>
			</div>
		</li>
	);
};
