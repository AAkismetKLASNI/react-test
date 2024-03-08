const initialState = {
	todoDeleted: false,
};

export const deleteTodoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TODO_DELETED': {
			return { ...state, todoDeleted: action.payload };
		}
		default:
			return state;
	}
};
