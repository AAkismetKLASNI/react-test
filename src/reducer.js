export const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	motionGame: 'Ходит Х',
	fields: Array(9).fill(),
};

export const ticTacToeReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_PLAYER_ON_X': {
			return { ...state, currentPlayer: 'X', motionGame: 'Ходит Х' };
		}
		case 'CHANGE_PLAYER_ON_O': {
			return { ...state, currentPlayer: 'O', motionGame: 'Ходит O' };
		}
		case 'GAME_IS_ENDED_TRUE': {
			return { ...state, isGameEnded: true, motionGame: action.payload };
		}
		case 'GAME_IS_ENDED_FALSE': {
			return { ...state, isGameEnded: false };
		}
		case 'DRAW_TRUE': {
			return {
				...state,
				isDraw: true,
				motionGame: 'Ничья',
				isGameEnded: true,
			};
		}
		case 'DRAW_FALSE': {
			return { ...state, isDraw: false };
		}
		case 'CLEAR_FIELDS': {
			return { ...state, fields: Array(9).fill() };
		}

		default:
			return state;
	}
};
