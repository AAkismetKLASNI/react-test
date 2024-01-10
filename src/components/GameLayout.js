import { Field, Information } from './index';
import styles from './GameLayout.module.css';

export const GameLayout = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
}) => {
	return (
		<>
			<div className={styles.containerApp}>
				<Field
					field={field}
					setField={setField}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
					isGameEnded={isGameEnded}
					setIsGameEnded={setIsGameEnded}
					isDraw={isDraw}
					setIsDraw={setIsDraw}
				/>
				<Information
					field={field}
					setField={setField}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
					isGameEnded={isGameEnded}
					setIsGameEnded={setIsGameEnded}
					isDraw={isDraw}
					setIsDraw={setIsDraw}
				/>
			</div>
		</>
	);
};
