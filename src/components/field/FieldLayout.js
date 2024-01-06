import styles from './field.module.css';

export const FieldLayout = (test) => {
	return (
		<>
			<div className={styles.container} onClick={test}>
				<button data-btn="1" className={styles.fieldBtn}></button>
				<button data-btn="2" className={styles.fieldBtn}></button>
				<button data-btn="3" className={styles.fieldBtn}></button>
				<button data-btn="4" className={styles.fieldBtn}></button>
				<button data-btn="5" className={styles.fieldBtn}></button>
				<button data-btn="6" className={styles.fieldBtn}></button>
				<button data-btn="7" className={styles.fieldBtn}></button>
				<button data-btn="8" className={styles.fieldBtn}></button>
				<button data-btn="9" className={styles.fieldBtn}></button>
			</div>
		</>
	);
};
