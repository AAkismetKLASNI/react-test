import styles from '../Main.module.css';
import { TodoListLayout } from '../../Todo-list/Todo-list-Layout';

export const MainTodoListLayout = (props) => {
	return (
		<>
			<div className={styles.SearchAndCreateTaskContainer}>
				<div className={styles.ContainerMini}>
					<input
						type="search"
						placeholder="Поиск"
						value={props.searchInput}
						onChange={props.handleChangeSearchInput}
					/>
					<div className={styles.ContainerOperation}>
						<div
							className={
								!props.todoCreated
									? styles.CreateTaskIcon
									: styles.DeleteTaskIcon
							}
							onClick={props.switchTodo}
						>
							<span>{!props.todoCreated ? '+' : '-'}</span>
						</div>
						<div
							className={
								!props.isArrange ? styles.ArrangeOff : styles.ArrangeOn
							}
							onClick={props.switchArrange}
						>
							<span>A</span>
						</div>
					</div>
				</div>
			</div>
			<TodoListLayout {...props} />
		</>
	);
};
