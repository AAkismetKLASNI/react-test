import styles from './Todo-Item.module.css';
import { useRequestDeleteTodo } from '../../hooks/use-request-delete-todo';

export const TodoItem = ({ id, title }) => {
	const {} = useRequestDeleteTodo(id);

	return (
		<li className={styles.TodoItem}>
			<div className={styles.ContainerMini}>
				<div key={id}>{title}</div>
				<div className={styles.ContainerOperation}>
					<span className={styles.EditTodo}>И</span>
					<span
						className={styles.DeleteTodo}
						onClick={() => useRequestDeleteTodo(id)}
					>
						-
					</span>
				</div>
			</div>
		</li>
	);
};
