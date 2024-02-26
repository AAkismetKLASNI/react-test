import styles from './Todo-list.module.css';
import {
	TodoChangeLayout,
	TodoCreateLayout,
	TodoItemLayout,
} from './components/Todos/index';
import { useContext } from 'react';

export const TodoListLayout = () => {
	return (
		<>
			{isLoader ? <div className={styles.Loader}></div> : null}
			{errorFetch ? (
				<div className={styles.errorFetch}>{errorFetch}</div>
			) : (
				<>
					<ul className={styles.ContainerTodos}>
						{todoCreated ? <TodoCreateLayout /> : null}
						{filtredTodos().map(({ title, id }) => {
							return <TodoItemLayout title={title} id={id} key={id} />;
						})}
					</ul>
				</>
			)}
		</>
	);
};
