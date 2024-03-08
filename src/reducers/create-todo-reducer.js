const initialState = {
	todoCreated: false,
	inputTodo: '',
	errorInputTodo: 'Введите название',
};

export const createTodoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_TODO_CREATED': {
			return { ...state, todoCreated: action.payload };
		}
		case 'SET_INPUT_TODO': {
			return { ...state, inputTodo: action.payload };
		}
		case 'CHANGE_ERROR': {
			return { ...state, errorInputTodo: action.payload };
		}
		default: {
			return state;
		}
	}
};
