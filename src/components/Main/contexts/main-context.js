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
		<ArrangeTodosContext value={arrangeValue}>
			<CreateTodoContext value={createValue}>
				<UpdateTodoContext value={updateValue}>
					<GetTodosContext value={getValue}>
						<DeleteTodoContext value={deleteValue}>
							<SearchTodosContext value={searchValue}>
								{children}
							</SearchTodosContext>
						</DeleteTodoContext>
					</GetTodosContext>
				</UpdateTodoContext>
			</CreateTodoContext>
		</ArrangeTodosContext>
	);
};
