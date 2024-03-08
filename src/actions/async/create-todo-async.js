export const createTodoAsync =
	(inputTodo, setInputTodo, toggleTodoCreated) => (dispatch) =>
		fetch('http://localhost:3500/todos', {
			method: 'POST',
			headers: { 'Content-type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: inputTodo,
				isChange: false,
			}),
		}).then(() => {
			dispatch(setInputTodo(''));
			dispatch(toggleTodoCreated(false));
		});
