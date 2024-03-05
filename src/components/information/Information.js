import { InformationLayout } from './InformationLayout';
import { useDispatch } from 'react-redux';
import {
	CHANGE_PLAYER_ON_X,
	GAME_IS_ENDED_FALSE,
	CLEAR_FIELDS,
	DRAW_FALSE,
} from '../../actions/index';

export const Information = () => {
	const dispatch = useDispatch();

	const startNewGame = () => {
		dispatch(DRAW_FALSE);
		dispatch(CLEAR_FIELDS);
		dispatch(CHANGE_PLAYER_ON_X);
		dispatch(GAME_IS_ENDED_FALSE);
	};

	return <InformationLayout startNewGame={startNewGame} />;
};
