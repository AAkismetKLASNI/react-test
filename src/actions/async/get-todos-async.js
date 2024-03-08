export const getTodosAsync =
	(getTodos, setRequestError, DROP_LOADER) => (dispatch) =>
		fetch('http://localhost:3500/todos')
			.then((res) => res.json())
			.then((loadedData) => {
				dispatch(setRequestError());
				dispatch(getTodos(loadedData));
			})
			.catch(() => dispatch(setRequestError('Ошибка! Подлючите порт 3500 :)')))
			.finally(() => dispatch(DROP_LOADER));
