import { FieldLayout } from './FieldLayout';
import { WIN_PATTERNS } from '../../core/constants';

export const Field = ({
	field,
	currentPlayer,
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
}) => {
	function calculateWinner(field) {
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (field[a] && field[a] === field[b] && field[a] === field[c]) {
				return true;
			}
		}
		return null;
	}

	const handleClick = (index) => {
		if (!calculateWinner(field) && !field[index]) {
			field[index] = currentPlayer === 'X' ? 'X' : 'O';

			if (!calculateWinner(field) && field.every((el) => el)) {
				setIsDraw(true);
			} else if (calculateWinner(field)) {
				setIsGameEnded(true);
			} else {
				currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
			}
		}
	};

	return <FieldLayout field={field} handleClick={handleClick} />;
};
