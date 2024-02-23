import styles from '../Main.module.css';
import { TodoChange, TodoRead } from '../../Todo/index';
import { NavLink } from 'react-router-dom';

export const MainTodoLayout = (props) => {
	return (
		<>
			<div className={styles.SearchAndCreateTaskContainer}>
				<div className={styles.ContainerMini}>
					<div className={styles.ContainerOperation}>
						<NavLink
							to="/"
							className={styles.BackMainLayout}
							onClick={() => props.setIsTodoChange(false)}
						>
							<span>{'<-'}</span>
						</NavLink>

						<span
							className={styles.EditTodo}
							onClick={() => props.setIsTodoChange(true)}
						>
							И
						</span>
						<span
							className={styles.DeleteTodo}
							onClick={() => props.requestDeleteTodo(props.urlIdTodo)}
						>
							-
						</span>
						{props.isTodoChange ? (
							<button
								className={styles.buttonCreateTodo}
								onClick={() =>
									props.requestUpdateTodo(
										props.urlIdTodo,
										props.inputTitleChange,
									)
								}
								disabled={props.errorInputTitleChange}
							>
								Подтвердить
							</button>
						) : null}
						{props.errorInputTitleChange ? (
							<span style={{ color: 'red' }}>
								{props.errorInputTitleChange}
							</span>
						) : null}
					</div>
				</div>
			</div>

			{props.isTodoChange ? (
				<TodoChange
					inputTitleChange={props.inputTitleChange}
					changeInputTitle={props.changeInputTitle}
					handleBlurChangeInput={props.handleBlurChangeInput}
					errorInputTitleChange={props.errorInputTitleChange}
				/>
			) : (
				<TodoRead title={props.inputTitleChange} />
			)}
		</>
	);
};
