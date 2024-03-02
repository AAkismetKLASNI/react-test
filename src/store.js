const createStore = (reducer, initialState) => {
	let state = initialState;

	return {
		dispath: (action) => reducer(state, action),
		getState: () => state,
	};
};

const store = createStore();
