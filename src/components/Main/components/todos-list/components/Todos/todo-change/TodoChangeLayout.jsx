import styles from '../Todo-Item.module.css';
import { useContext } from 'react';
import { UpdateTodoContext } from '../../../../../contexts/all-contexts';

export const TodoChangeLayout = ({ id, title }) => {
	const {
		inputTitleChange,
		changeInputTitle,
		handleBlurChangeInput,
		errorInputTitleChange,
		requestUpdateTodo,
	} = useContext(UpdateTodoContext);

	return (
		<li className={styles.TodoItem}>
			<div className={styles.ContainerMini}>
				<input
					className={styles.inputTodo}
					value={title}
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
