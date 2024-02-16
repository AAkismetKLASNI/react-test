import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const useRequestDeleteTodo = () => {
	const requestDeleteTodo = (id) => {
		const deleteTodos = ref(db, `todos/${id}`);
		remove(deleteTodos);
	};
	return { requestDeleteTodo };
};
