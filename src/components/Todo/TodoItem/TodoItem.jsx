import styles from '../Todo-Item.module.css';
import { NavLink } from 'react-router-dom';

export const TodoItem = ({ title, id, setInputTitleChange }) => {
	return (
		<>
			<li className={styles.TodoItem}>
				<div className={styles.ContainerMini}>
					<NavLink
						to={`/todo/${id}`}
						className={styles.TitleTodo}
						key={id}
						onClick={() => setInputTitleChange(title)}
					>
						{title}
					</NavLink>
				</div>
			</li>
		</>
	);
};
