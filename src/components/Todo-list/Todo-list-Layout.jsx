import styles from './Todo-list.module.css';
import { TodoItem, CreateTodoItem } from '../index';

export const TodoListLayout = ({
	todoCreated,
	refresher,
	requestCreateTodoItem,
	inputTodo,
	handleChange,
	errorInputTodo,
	setErrorInputTodo,
	handleBlur,
	filtredTodos,
	errorFetch,
	isLoader,
}) => {
	return (
		<>
			{isLoader ? <div className={styles.Loader}></div> : null}
			{errorFetch ? (
				<div className={styles.errorFetch}>{errorFetch}</div>
			) : (
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
						{filtredTodos().map(({ title, id }) => {
							return (
								<TodoItem
									title={title}
									id={id}
									key={id}
									refresher={refresher}
									inputTodo={inputTodo}
									handleChange={handleChange}
									errorInputTodo={errorInputTodo}
									setErrorInputTodo={setErrorInputTodo}
									handleBlur={handleBlur}
								/>
							);
						})}
					</ul>
				</>
			)}
		</>
	);
};
