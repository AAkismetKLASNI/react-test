import styles from './Operation.module.css';

export const OperationsLayout = ({
	todoCreated,
	switchTodo,
	isArrange,
	switchArrange,
}) => {
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
