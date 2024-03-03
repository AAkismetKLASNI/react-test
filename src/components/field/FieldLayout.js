import styles from './field.module.css';

export const FieldLayout = ({ fields, handleClick, motionGame }) => {
	return (
		<>
			<div className={styles.container}>
				{fields.map((field, index) => (
					<button
						className={styles.fieldBtn}
						key={index}
						onClick={() => handleClick(index)}
					>
						{field}
					</button>
				))}
			</div>
			<h3>{motionGame}</h3>
		</>
	);
};
