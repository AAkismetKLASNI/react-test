import styles from './information.module.css';

export const InformationLayout = ({ startNewGame }) => {
	return (
		<>
			<div className={styles.containerInformation}>
				<button className={styles.startNewGameButton} onClick={startNewGame}>
					Начать заново
				</button>
			</div>
		</>
	);
};
