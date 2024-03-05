import { FieldLayout } from './FieldLayout';
import { WIN_PATTERNS } from '../../core/constants';
import { useDispatch, useSelector } from 'react-redux';
import {
	CHANGE_PLAYER_ON_O,
	CHANGE_PLAYER_ON_X,
	DRAW_TRUE,
	gameEndedIsTrue,
} from '../../actions/index';
import {
	currentPlayerSelector,
	fieldsSelector,
	motionGameSelector,
} from '../../selectors/index';

export const Field = () => {
	const dispatch = useDispatch();
	const currentPlayer = useSelector(currentPlayerSelector);
	const motionGame = useSelector(motionGameSelector);
	const fields = useSelector(fieldsSelector);

	function calculateWinner(fields) {
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
				return true;
			}
		}
		return null;
	}

	const handleClick = (index) => {
		if (!calculateWinner(fields) && !fields[index]) {
			fields[index] = currentPlayer === 'X' ? 'X' : 'O';

			if (!calculateWinner(fields) && fields.every((el) => el)) {
				dispatch(DRAW_TRUE);
			} else if (calculateWinner(fields)) {
				dispatch(gameEndedIsTrue(currentPlayer));
			} else {
				currentPlayer === 'X'
					? dispatch(CHANGE_PLAYER_ON_O)
					: dispatch(CHANGE_PLAYER_ON_X);
			}
		}
	};

	return (
		<FieldLayout
			fields={fields}
			currentPlayer={currentPlayer}
			handleClick={handleClick}
			motionGame={motionGame}
		/>
	);
};
