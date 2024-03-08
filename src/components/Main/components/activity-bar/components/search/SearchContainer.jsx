import { SearchLayout } from './SearchLayout';
import { useSearchTodo } from '../../../../../../hooks';

export const SearchContainer = () => {
	const { searchInput, handleChangeSearchInput } = useSearchTodo();

	return (
		<SearchLayout
			searchInput={searchInput}
			handleChangeSearchInput={handleChangeSearchInput}
		/>
	);
};
