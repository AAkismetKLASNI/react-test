import { FieldLayout } from './FieldLayout';
import { WIN_PATTERNS } from '../../core/constants';
import { store } from '../../store';

export const Field = ({ updateStateFunc }) => {
	const { currentPlayer, motionGame, fields } = store.getState();

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
		updateStateFunc();

		if (!calculateWinner(fields) && !fields[index]) {
			fields[index] = currentPlayer === 'X' ? 'X' : 'O';

			if (!calculateWinner(fields) && fields.every((el) => el)) {
				store.dispatch({ type: 'DRAW_TRUE' });
			} else if (calculateWinner(fields)) {
				store.dispatch({
					type: 'GAME_IS_ENDED_TRUE',
					payload: `Победитель ${currentPlayer}`,
				});
			} else {
				currentPlayer === 'X'
					? store.dispatch({ type: 'CHANGE_PLAYER_ON_O' })
					: store.dispatch({ type: 'CHANGE_PLAYER_ON_X' });
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
