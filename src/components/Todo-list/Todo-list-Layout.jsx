import styles from './Todo-list.module.css';

export const TodoListLayout = ({ id, title }) => {
	return (
		<>
			<div className={styles.ContainerTodos}>
				<div className={styles.TodoItem}>
					<div className={styles.ContainerMini}>
						<div key={id}>{title}</div>
						<div className={styles.ContainerOperation}>
							<span className={styles.EditTodo}>И</span>
							<span className={styles.DeleteTodo}>-</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
