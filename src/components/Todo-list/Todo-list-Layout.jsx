import styles from './Todo-list.module.css';
import { TodoItem, TodoCreated } from '../index';

export const TodoListLayout = (props) => {
	return (
		<>
			{props.isLoader ? <div className={styles.Loader}></div> : null}
			{props.errorFetch ? (
				<div className={styles.errorFetch}>{props.errorFetch}</div>
			) : (
				<>
					<ul className={styles.ContainerTodos}>
						{props.todoCreated ? <TodoCreated {...props} /> : null}
						{props.filtredTodos().map(({ title, id }) => {
							return (
								<TodoItem
									title={title}
									id={id}
									setInputTitleChange={props.setInputTitleChange}
								/>
							);
						})}
					</ul>
				</>
			)}
		</>
	);
};
