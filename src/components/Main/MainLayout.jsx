import styles from './Main.module.css';
import { TodoListLayout } from '../Todo-list/Todo-list-Layout';

export const MainLayout = ({
	todo,
	switchTodo,
	todoCreated,
	refresher,
	requestCreateTodoItem,
	handleChange,
	inputTodo,
	errorInputTodo,
	handleBlur,
}) => {
	return (
		<>
			<main>
				<div className={styles.Container}>
					<div className={styles.Wrapper}>
						<div className={styles.SearchAndCreateTaskContainer}>
							<div className={styles.ContainerMini}>
								<input type="search" placeholder="Поиск" />
								<div
									className={
										!todoCreated ? styles.CreateTaskIcon : styles.DeleteTaskIcon
									}
									onClick={switchTodo}
								>
									<span>{!todoCreated ? '+' : '-'}</span>
								</div>
							</div>
						</div>
						<TodoListLayout
							todo={todo}
							todoCreated={todoCreated}
							refresher={refresher}
							requestCreateTodoItem={requestCreateTodoItem}
							handleChange={handleChange}
							inputTodo={inputTodo}
							errorInputTodo={errorInputTodo}
							handleBlur={handleBlur}
						/>
					</div>
				</div>
			</main>
		</>
	);
};
