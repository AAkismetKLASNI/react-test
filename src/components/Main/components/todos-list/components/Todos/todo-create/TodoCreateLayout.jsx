import styles from '../Todo-Item.module.css';
import { useContext } from 'react';
import { CreateTodoContext } from '../../../../../contexts/all-contexts';

export const TodoCreateLayout = () => {
	const {
		inputTodo,
		handleChange,
		handleBlur,
		errorInputTodo,
		requestCreateTodoItem,
	} = useContext(CreateTodoContext);

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
					onClick={() => requestCreateTodoItem()}
					disabled={errorInputTodo}
				>
					Подтвердить
				</button>
			</div>
		</li>
	);
};
