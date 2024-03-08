export const updateTodoAsync = (id, title, isTodoChangeAct) => (dispatch) =>
	fetch(`http://localhost:3500/todos/${id}`, {
		method: 'PUT',
		headers: { 'Content-type': 'application/json:charset=utf-8' },
		body: JSON.stringify({ title: title, isChange: false }),
	}).then(() => {
		dispatch(isTodoChangeAct(false));
	});
