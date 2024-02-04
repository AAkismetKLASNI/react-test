export const useRequestDeleteTodo = (refresher) => {
	const requestDeleteTodo = (id) => {
		fetch(`http://localhost:3500/todos/${id}`, { method: 'DELETE' }).then(() =>
			refresher(),
		);
	};
	return { requestDeleteTodo };
};
