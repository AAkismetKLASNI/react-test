import { useContext } from 'react';
import { SearchTodosContext } from '../../../../contexts/all-contexts';
import styles from './Search.module.css';

export const SearchLayout = () => {
	const { searchInput, handleChangeSearchInput } =
		useContext(SearchTodosContext);

	return (
		<input
			className={styles.SearchTodoInput}
			type="search"
			placeholder="Поиск"
			value={searchInput}
			onChange={handleChangeSearchInput}
		/>
	);
};
