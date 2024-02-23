import styles from '../Todo-Item.module.css';

export const TodoChange = (props) => {
	return (
		<div className={styles.ContainerTextareaTodo}>
			<textarea
				className={styles.TextareaTodo}
				value={props.inputTitleChange}
				onChange={props.changeInputTitle}
				onBlur={props.handleBlurChangeInput}
				placeholder="Изменить название"
			/>
		</div>
	);
};
