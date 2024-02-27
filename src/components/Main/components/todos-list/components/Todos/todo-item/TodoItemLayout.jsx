import styles from '../Todo-Item.module.css';
import { useContext } from 'react';
import {
	DeleteTodoContext,
	UpdateTodoContext,
} from '../../../../../contexts/all-contexts';
import { TodoChangeLayout } from '../todo-change/TodoChangeLayout';
import { useState } from 'react';

export const TodoItemLayout = ({ id, title }) => {
	// const [isTodoChange, setIsTodoChange] = useState(false);

	const { setIsTodoChange, isTodoChange } = useContext(UpdateTodoContext);

	const { requestDeleteTodo } = useContext(DeleteTodoContext);

	if (isTodoChange) {
		return <TodoChangeLayout id={id} title={title} />;
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
