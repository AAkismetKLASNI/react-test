import { OperationsLayout } from './OperationsLayout';
import { todoCreatedSelector } from '../../../../../../selectors';
import { useSelector } from 'react-redux';
import { useArrange, useRequestCreateTodo } from '../../../../../../hooks';

export const OperationsContainer = () => {
	const todos = useSelector((state) => state.todosState.todos);
	const { isArrange, switchArrange } = useArrange(todos);
	const { switchTodo } = useRequestCreateTodo();

	const todoCreated = useSelector(todoCreatedSelector);

	return (
		<OperationsLayout
			todoCreated={todoCreated}
			switchTodo={switchTodo}
			isArrange={isArrange}
			switchArrange={switchArrange}
		/>
	);
};
