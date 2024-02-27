import {
	ArrangeTodosContext,
	CreateTodoContext,
	DeleteTodoContext,
	GetTodosContext,
	SearchTodosContext,
	RefresherContext,
} from './all-contexts';

export const MainContextsProvider = ({
	arrangeValue,
	createValue,
	refresherValue,
	getValue,
	searchValue,
	children,
}) => {
	return (
		<ArrangeTodosContext.Provider value={arrangeValue}>
			<CreateTodoContext.Provider value={createValue}>
				<RefresherContext.Provider value={refresherValue}>
					<GetTodosContext.Provider value={getValue}>
						<SearchTodosContext.Provider value={searchValue}>
							{children}
						</SearchTodosContext.Provider>
					</GetTodosContext.Provider>
				</RefresherContext.Provider>
			</CreateTodoContext.Provider>
		</ArrangeTodosContext.Provider>
	);
};
