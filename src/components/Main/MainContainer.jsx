import { MainLayout } from './MainLayout';
import { useState } from 'react';
import {
	useArrange,
	useRequestCreateTodo,
	useRequestGetTodo,
	useSearchTodo,
	useRequestDeleteTodo,
	useRequestUpdateTodo,
} from '../../hooks/index';
import { MainContextsProvider } from './contexts/main-context';

export const MainContainer = () => {
	const [refreshData, setRefreshData] = useState(false);
	const refresher = () => {
		setRefreshData(!refreshData);
	};

	const createValue = useRequestCreateTodo(refresher);

	const getValue = useRequestGetTodo(refreshData);

	const arrangeValue = useArrange(getValue.todos);

	const searchValue = useSearchTodo(arrangeValue.getArrangeTodos);

	const deleteValue = useRequestDeleteTodo(refresher);

	const updateValue = useRequestUpdateTodo(refresher);

	return (
		<MainContextsProvider
			arrangeValue={arrangeValue}
			createValue={createValue}
			getValue={getValue}
			searchValue={searchValue}
			deleteValue={deleteValue}
			updateValue={updateValue}
		>
			<MainLayout />
		</MainContextsProvider>
	);
};
