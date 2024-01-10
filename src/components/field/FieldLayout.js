import styles from './field.module.css';

export const FieldLayout = ({ field, handleClick }) => {
	return (
		<>
			<div className={styles.container}>
				{field.map((field, index) => (
					<button
						className={styles.fieldBtn}
						key={index}
						onClick={() => handleClick(index)}
					>
						{field}
					</button>
				))}
			</div>
		</>
	);
};
