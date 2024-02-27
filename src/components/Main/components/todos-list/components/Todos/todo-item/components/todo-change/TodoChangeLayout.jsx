import styles from '../../../Todo-Item.module.css';

export const TodoChangeLayout = ({
	id,
	inputTitleChange,
	changeInputTitle,
	handleBlurChangeInput,
	errorInputTitleChange,
	requestUpdateTodo,
}) => {
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
};
