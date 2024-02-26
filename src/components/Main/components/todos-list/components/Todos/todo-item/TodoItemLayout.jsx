import styles from '../Todo-Item.module.css';
import { useContext } from 'react';
import {
	DeleteTodoContext,
	UpdateTodoContext,
} from '../../../../../contexts/all-contexts';

export const TodoItemLayout = ({ id, title }) => {
	const { setIsTodoChange } = useContext(UpdateTodoContext);
	const { requestDeleteTodo } = useContext(DeleteTodoContext);

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
};
