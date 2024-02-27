import { MainLayout } from './MainLayout';
import {
	useArrange,
	useRequestCreateTodo,
	useRequestGetTodo,
	useSearchTodo,
	useRequestDeleteTodo,
	useRefresher,
} from '../../hooks/index';
import { MainContextsProvider } from './contexts/main-context';

export const MainContainer = () => {
	const { refreshData, refresher } = useRefresher();

	const createValue = useRequestCreateTodo(refresher);

	const getValue = useRequestGetTodo(refreshData);

	const arrangeValue = useArrange(getValue.todos);

	const searchValue = useSearchTodo(arrangeValue.getArrangeTodos);

	return (
		<MainContextsProvider
			arrangeValue={arrangeValue}
			createValue={createValue}
			getValue={getValue}
			searchValue={searchValue}
			refresherValue={refresher}
		>
			<MainLayout />
		</MainContextsProvider>
	);
};
