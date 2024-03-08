import styles from './Todo-list.module.css';
import { TodoCreateContainer, TodoItemLayout } from './components/Todos/index';

export const TodoListLayout = ({
	isLoader,
	errorFetch,
	todoCreated,
	filteredTodos,
}) => {
	return (
		<>
			{isLoader ? <div className={styles.Loader}></div> : null}
			{errorFetch ? (
				<div className={styles.ErrorFetch}>{errorFetch}</div>
			) : (
				<>
					<ul className={styles.ContainerTodos}>
						{todoCreated ? <TodoCreateContainer /> : null}
						{filteredTodos().map(({ title, id, isChange }) => (
							<TodoItemLayout
								title={title}
								id={id}
								key={id}
								isChange={isChange}
							/>
						))}
					</ul>
				</>
			)}
		</>
	);
};
