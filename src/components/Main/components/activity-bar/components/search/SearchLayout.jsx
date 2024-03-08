import styles from './Search.module.css';

export const SearchLayout = ({ searchInput, handleChangeSearchInput }) => {
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
