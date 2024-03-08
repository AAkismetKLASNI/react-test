import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import {
	todosReducer,
	createTodoReducer,
	deleteTodoReducer,
	updateTodoReducer,
	searchTodoReducer,
	arrangeTodosReducer,
} from './reducers';

const reducer = combineReducers({
	todosState: todosReducer,
	createTodoState: createTodoReducer,
	deleteTodoState: deleteTodoReducer,
	updateTodoState: updateTodoReducer,
	searchTodoState: searchTodoReducer,
	arrangeTodosState: arrangeTodosReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
