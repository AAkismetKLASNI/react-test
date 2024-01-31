import styles from './Main.module.css';
import { TodoListContainer } from '../Todo-list/Todo-list-Container';

export const Main = () => {
	return (
		<>
			<main>
				<div className={styles.Container}>
					<div className={styles.Wrapper}>
						<div className={styles.SearchAndCreateTaskContainer}>
							<div className={styles.ContainerMini}>
								<input type="search" placeholder="Поиск" />
								<div className={styles.CreateTaskIcon}>
									<span>+</span>
								</div>
							</div>
						</div>
						<TodoListContainer />
					</div>
				</div>
			</main>
		</>
	);
};
