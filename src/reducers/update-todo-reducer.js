const initialState = {
	isTodoChange: false,
	inputTitleChange: null,
	errorInputTitleChange: null,
};

export const updateTodoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'IS_TODO_CHANGE': {
			return { ...state, isTodoChange: action.payload };
		}
		case 'INPUT_TITLE_CHANGE': {
			return { ...state, inputTitleChange: action.payload };
		}
		case 'ERROR_INPUT_TITLE_CHANGE': {
			return { ...state, errorInputTitleChange: action.payload };
		}
		default:
			return state;
	}
};
