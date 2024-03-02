import styles from './information.module.css';

export const InformationLayout = ({ startNewGame, checkDrawAndEndedGame }) => {
	return (
		<>
			<div className={styles.containerInformation}>
				<h3 style={{ textAlign: 'center' }}>{checkDrawAndEndedGame()}</h3>
				<button className={styles.startNewGameButton} onClick={startNewGame}>
					Начать заново
				</button>
			</div>
		</>
	);
};
