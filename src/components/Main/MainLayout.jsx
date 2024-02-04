import styles from './Main.module.css';
import { TodoListContainer } from '../Todo-list/Todo-list-Container';

export const MainLayout = ({
	todo,
	switchTodo,
	todoCreated,
	refresher,
	requestCreateTodoItem,
	handleChange,
	inputTodo,
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
						<TodoListContainer
							todo={todo}
							todoCreated={todoCreated}
							refresher={refresher}
							requestCreateTodoItem={requestCreateTodoItem}
							handleChange={handleChange}
							inputTodo={inputTodo}
						/>
					</div>
				</div>
			</main>
		</>
	);
};
