import { InformationLayout } from './InformationLayout';

export const Information = ({
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
}) => {
	const startNewGame = () => {
		setField(Array(9).fill(''));
		setIsGameEnded(false);
		setCurrentPlayer('X');
		setIsDraw(false);
	};

	const checkDrawAndEndedGame = () => {
		if (isDraw) {
			return 'Ничья';
		} else if (!isDraw && !isGameEnded) {
			return `Ходит: ${currentPlayer}`;
		} else if (!isDraw && isGameEnded) {
			return `Победитель: ${currentPlayer}`;
		}
	};

	console.log(checkDrawAndEndedGame());

	return (
		<InformationLayout
			currentPlayer={currentPlayer}
			startNewGame={startNewGame}
			checkDrawAndEndedGame={checkDrawAndEndedGame}
		/>
	);
};
