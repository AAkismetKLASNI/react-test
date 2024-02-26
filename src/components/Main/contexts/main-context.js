import { ArrangeTodosContext } from './context-arrange';
import { CreateTodosContext } from './context-create-todos';
import { GetTodosContext } from './context-get-todos';
import { SearchTodosContext } from './context-search-todos';
import { UpdateTodoContext } from './context-update-todo';
import { DeleteTodoContext } from './context-delete.todo';

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
			<CreateTodosContext value={createValue}>
				<UpdateTodoContext value={updateValue}>
					<GetTodosContext value={getValue}>
						<DeleteTodoContext value={deleteValue}>
							<SearchTodosContext value={searchValue}>
								{children}
							</SearchTodosContext>
						</DeleteTodoContext>
					</GetTodosContext>
				</UpdateTodoContext>
			</CreateTodosContext>
		</ArrangeTodosContext>
	);
};
