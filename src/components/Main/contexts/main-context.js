import {
	ArrangeTodosContext,
	CreateTodoContext,
	DeleteTodoContext,
	GetTodosContext,
	SearchTodosContext,
	UpdateTodoContext,
} from './all-contexts';

export const MainContextsProvider = ({
	arrangeValue,
	createValue,
	updateValue,
	getValue,
	deleteValue,
	searchValue,
	children,
}) => {
	return (
		<ArrangeTodosContext.Provider value={arrangeValue}>
			<CreateTodoContext.Provider value={createValue}>
				<UpdateTodoContext.Provider value={updateValue}>
					<GetTodosContext.Provider value={getValue}>
						<DeleteTodoContext.Provider value={deleteValue}>
							<SearchTodosContext.Provider value={searchValue}>
								{children}
							</SearchTodosContext.Provider>
						</DeleteTodoContext.Provider>
					</GetTodosContext.Provider>
				</UpdateTodoContext.Provider>
			</CreateTodoContext.Provider>
		</ArrangeTodosContext.Provider>
	);
};
