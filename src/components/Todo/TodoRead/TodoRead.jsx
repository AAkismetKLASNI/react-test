import styles from '../Todo-Item.module.css';

export const TodoRead = ({ title }) => {
	return (
		<div className={styles.TodoReadContainer}>
			<p>{title}</p>
		</div>
	);
};
