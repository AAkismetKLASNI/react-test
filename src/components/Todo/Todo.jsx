import styles from './Todo-Item.module.css';
import { useRequestCreateTodo } from '../../hooks/use-request-create-todo';
import { useRequestDeleteTodo } from '../../hooks/use-request-delete-todo';
import { useRequestUpdateTodo } from '../../hooks/use-request-update-todo';

export const CreateTodoItem = ({
	refresher,
	requestCreateTodoItem,
	inputTodo,
	handleChange,
}) => {
	return (
		<li className={styles.TodoItem}>
			<div className={styles.ContainerMini}>
				<input
					className={styles.inputTodo}
					value={inputTodo}
					onChange={handleChange}
					placeholder="Название"
				/>
				<button
					className={styles.buttonCreateTodo}
					onClick={() => requestCreateTodoItem(refresher)}
				>
					Подтвердить
				</button>
			</div>
		</li>
	);
};

export const TodoItem = ({ title, id, refresher }) => {
	const { requestDeleteTodo } = useRequestDeleteTodo(refresher);
	const { requestUpdateTodo } = useRequestUpdateTodo(refresher);

	return (
		<li className={styles.TodoItem}>
			<div className={styles.ContainerMini}>
				<div key={id}>{title}</div>
				<div className={styles.ContainerOperation}>
					<span
						className={styles.EditTodo}
						onClick={() => requestUpdateTodo(id, title)}
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
