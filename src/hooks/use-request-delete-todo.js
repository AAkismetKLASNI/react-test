import { useNavigate } from 'react-router-dom';

export const useRequestDeleteTodo = (refresher) => {
	const navigate = useNavigate();

	const requestDeleteTodo = (id) => {
		fetch(`http://localhost:3500/todos/${id}`, { method: 'DELETE' }).then(
			() => {
				refresher();
				navigate('/');
			},
		);
	};
	return { requestDeleteTodo };
};
