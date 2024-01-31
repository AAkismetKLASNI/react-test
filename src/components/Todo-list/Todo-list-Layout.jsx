import styles from './Todo-list.module.css';
import { TodoItem } from '../index';

export const TodoListLayout = ({ todo }) => {
	return (
		<>
			<ul className={styles.ContainerTodos}>
				{todo.map(({ id, title }) => (
					<TodoItem id={id} title={title} />
				))}
			</ul>
		</>
	);
};
