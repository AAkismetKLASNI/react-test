import styles from './Header.module.css';

export const Header = () => {
	return (
		<>
			<header className={styles.Header}>
				<div className={styles.Container}>
					<div className={styles.Wrapper}>
						<p>TODO-LIST</p>
						<p>TASK-1</p>
					</div>
				</div>
			</header>
		</>
	);
};
