export const useRequestUpdateTodo = (refresher) => {
	const requestUpdateTodo = (id, title) => {
		fetch(`http://localhost:3500/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-type': 'application/json:charset=utf-8' },
			body: JSON.stringify({ title: 'test' }),
		}).then(() => refresher());
	};

	return { requestUpdateTodo };
};
