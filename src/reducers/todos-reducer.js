const initialState = {
	todos: [],
	errorFetch: '',
	isLoader: true,
};

export const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_TODOS': {
			return { ...state, todos: [...action.payload].reverse() };
		}
		case 'SET_REQUEST_ERROR': {
			return {
				...state,
				errorFetch: action.payload,
			};
		}
		case 'DROP_LOADER': {
			return { ...state, isLoader: false };
		}
		default:
			return state;
	}
};
