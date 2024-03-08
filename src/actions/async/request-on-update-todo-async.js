export const requestOnUpdateTodoAsync =
	(id, title, inputTitleChangeAct, isTodoChangeAct) => (dispatch) =>
		fetch(`http://localhost:3500/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-type': 'application/json:charset=utf-8' },
			body: JSON.stringify({ title: title, isChange: true }),
		}).then(() => {
			dispatch(inputTitleChangeAct(title));
			dispatch(isTodoChangeAct(true));
		});
