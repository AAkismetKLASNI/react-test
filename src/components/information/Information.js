import { store } from '../../store';
import { InformationLayout } from './InformationLayout';

export const Information = ({ updateStateFunc }) => {
	const startNewGame = () => {
		updateStateFunc();

		store.dispatch({ type: 'CLEAR_FIELDS' });
		store.dispatch({ type: 'GAME_IS_ENDED_FALSE' });
		store.dispatch({ type: 'CHANGE_PLAYER_ON_X' });
		store.dispatch({ type: 'DRAW_FALSE' });
	};

	return <InformationLayout startNewGame={startNewGame} />;
};
