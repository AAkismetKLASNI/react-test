import { ticTacToeReducer, initialState } from './reducer';

const createStore = (reducer, initialState) => {
	let state = initialState;

	return {
		dispatch: (action) => (state = reducer(state, action)),
		getState: () => {
			return state;
		},
	};
};

export const store = createStore(ticTacToeReducer, initialState);
