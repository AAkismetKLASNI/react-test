export const deleteTodoAsync = (id, deleteTodo) => (dispatch) =>
	fetch(`http://localhost:3500/todos/${id}`, {
		method: 'DELETE',
	})
		.then(() => dispatch(deleteTodo(true)))
		.finally(() => dispatch(deleteTodo(false)));
