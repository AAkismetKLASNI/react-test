import styles from './Todo-Item.module.css';
import { useRequestUpdateTodo } from '../../hooks/use-request-update-todo.js';
import { useRequestDeleteTodo } from '../../hooks/use-request-delete-todo';

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
	const {
		isTodoChange,
		setIsTodoChange,
		requestUpdateTodo,
		changeInputTitle,
		inputTitleChange,
		errorInputTitleChange,
		handleBlurChangeInput,
	} = useRequestUpdateTodo(refresher, title);

	const { requestDeleteTodo } = useRequestDeleteTodo(refresher);

	if (isTodoChange) {
		return (
			<li className={styles.TodoItem}>
				<div className={styles.ContainerMini}>
					<input
						className={styles.inputTodo}
						value={inputTitleChange}
						onChange={changeInputTitle}
						onBlur={handleBlurChangeInput}
						placeholder="Изменить название"
					/>
					{errorInputTitleChange && (
						<span style={{ color: 'red' }}>{errorInputTitleChange}</span>
					)}
					<button
						className={styles.buttonCreateTodo}
						onClick={() => requestUpdateTodo(id, inputTitleChange)}
						disabled={errorInputTitleChange}
					>
						Подтвердить
					</button>
				</div>
			</li>
		);
	} else {
		return (
			<li className={styles.TodoItem}>
				<div className={styles.ContainerMini}>
					<div key={id}>{title}</div>
					<div className={styles.ContainerOperation}>
						<span
							className={styles.EditTodo}
							onClick={() => setIsTodoChange(true)}
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
	}
};
