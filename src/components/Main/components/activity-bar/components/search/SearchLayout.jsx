import { useContext } from 'react';
import { SearchTodosContext } from '../../../../contexts/context-search-todos';

export const SearchLayout = () => {
	const { searchInput, handleChangeSearchInput } =
		useContext(SearchTodosContext);

	return (
		<input
			type="search"
			placeholder="Поиск"
			value={searchInput}
			onChange={handleChangeSearchInput}
		/>
	);
};
