import styles from './Main.module.css';
import { TodoListLayout } from '../Todo-list/Todo-list-Layout';

export const MainLayout = ({
	switchTodo,
	todoCreated,
	refresher,
	requestCreateTodoItem,
	handleChange,
	inputTodo,
	errorInputTodo,
	setErrorInputTodo,
	handleBlur,
	searchInput,
	handleChangeSearchInput,
	filtredTodos,
	switchArrange,
	isArrange,
	errorFetch,
	isLoader,
}) => {
	return (
		<>
			<main>
				<div className={styles.Container}>
					<div className={styles.Wrapper}>
						<div className={styles.SearchAndCreateTaskContainer}>
							<div className={styles.ContainerMini}>
								<input
									type="search"
									placeholder="Поиск"
									value={searchInput}
									onChange={handleChangeSearchInput}
								/>
								<div className={styles.ContainerOperation}>
									<div
										className={
											!todoCreated
												? styles.CreateTaskIcon
												: styles.DeleteTaskIcon
										}
										onClick={switchTodo}
									>
										<span>{!todoCreated ? '+' : '-'}</span>
									</div>
									<div
										className={
											!isArrange ? styles.ArrangeOff : styles.ArrangeOn
										}
										onClick={switchArrange}
									>
										<span>A</span>
									</div>
								</div>
							</div>
						</div>
						<TodoListLayout
							todoCreated={todoCreated}
							refresher={refresher}
							requestCreateTodoItem={requestCreateTodoItem}
							handleChange={handleChange}
							inputTodo={inputTodo}
							errorInputTodo={errorInputTodo}
							setErrorInputTodo={setErrorInputTodo}
							handleBlur={handleBlur}
							filtredTodos={filtredTodos}
							errorFetch={errorFetch}
							isLoader={isLoader}
						/>
					</div>
				</div>
			</main>
		</>
	);
};
