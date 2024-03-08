const initialState = {
	searchInput: '',
};

export const searchTodoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'HANDLE_SEARCH_INPUT': {
			return { ...state, searchInput: action.payload };
		}
		case 'UPDATE_FILTERED_TODOS': {
			console.log(action.payload);
			return { ...state, filteredTodos: action.payload };
		}
		default:
			return state;
	}
};
