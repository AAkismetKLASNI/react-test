import styles from './Todo-list.module.css';
import { TodoItem, CreateTodoItem } from '../index';
export const TodoListLayout = ({
	todo,
	todoCreated,
	refresher,
	requestCreateTodoItem,
	inputTodo,
	handleChange,
	errorInputTodo,
	handleBlur,
}) => {
	return (
		<>
			<ul className={styles.ContainerTodos}>
				{todoCreated ? (
					<CreateTodoItem
						refresher={refresher}
						requestCreateTodoItem={requestCreateTodoItem}
						inputTodo={inputTodo}
						handleChange={handleChange}
						errorInputTodo={errorInputTodo}
						handleBlur={handleBlur}
					/>
				) : null}
				{Object.entries(todo).map(([, { title, id }]) => (
					<TodoItem title={title} id={id} refresher={refresher} />
				))}
			</ul>
		</>
	);
};
