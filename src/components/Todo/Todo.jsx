import styles from './Todo-Item.module.css';
import { useRequestDeleteTodo } from '../../hooks/use-request-delete-todo';
import { useRequestUpdateTodo } from '../../hooks/use-request-update-todo';

export const CreateTodoItem = ({
	refresher,
	requestCreateTodoItem,
	inputTodo,
	handleChange,
	errorInputTodo,
	handleBlur,
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
					onClick={() => requestCreateTodoItem(refresher)}
					disabled={errorInputTodo}
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
