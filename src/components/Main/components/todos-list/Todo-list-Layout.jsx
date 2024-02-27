import styles from './Todo-list.module.css';
import { TodoCreateLayout, TodoItemLayout } from './components/Todos/index';
import { useContext } from 'react';
import {
	CreateTodoContext,
	GetTodosContext,
	SearchTodosContext,
} from '../../contexts/all-contexts';

export const TodoListLayout = () => {
	const { isLoader, errorFetch } = useContext(GetTodosContext);
	const { filtredTodos } = useContext(SearchTodosContext);
	const { todoCreated } = useContext(CreateTodoContext);

	return (
		<>
			{isLoader ? <div className={styles.Loader}></div> : null}
			{errorFetch ? (
				<div className={styles.ErrorFetch}>{errorFetch}</div>
			) : (
				<>
					<ul className={styles.ContainerTodos}>
						{todoCreated ? <TodoCreateLayout /> : null}
						{filtredTodos().map(({ title, id }) => (
							<TodoItemLayout title={title} id={id} key={id} />
						))}
					</ul>
				</>
			)}
		</>
	);
};
