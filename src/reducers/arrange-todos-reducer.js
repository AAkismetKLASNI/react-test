const initialState = {
	isArrange: false,
};

export const arrangeTodosReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_IS_ARRANGE': {
			return { ...state, isArrange: action.payload };
		}
		default:
			return state;
	}
};
