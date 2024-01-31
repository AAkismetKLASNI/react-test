import styles from './Todo-Item.module.css';

export const TodoItem = ({ id, title }) => {
	return (
		<li className={styles.TodoItem}>
			<div className={styles.ContainerMini}>
				<div key={id}>{title}</div>
				<div className={styles.ContainerOperation}>
					<span className={styles.EditTodo}>И</span>
					<span className={styles.DeleteTodo}>-</span>
				</div>
			</div>
		</li>
	);
};
