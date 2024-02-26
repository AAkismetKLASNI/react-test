import styles from './Operation.module.css';
import { useContext } from 'react';
import {
	ArrangeTodosContext,
	CreateTodoContext,
} from '../../../../contexts/all-contexts';

export const OperationsLayout = () => {
	const { todoCreated, switchTodo } = useContext(CreateTodoContext);
	const { isArrange, switchArrange } = useContext(ArrangeTodosContext);

	return (
		<div className={styles.ContainerOperation}>
			<div
				className={!todoCreated ? styles.CreateTaskIcon : styles.DeleteTaskIcon}
				onClick={switchTodo}
			>
				<span>{!todoCreated ? '+' : '-'}</span>
			</div>
			<div
				className={!isArrange ? styles.ArrangeOff : styles.ArrangeOn}
				onClick={switchArrange}
			>
				<span>A</span>
			</div>
		</div>
	);
};
