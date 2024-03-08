import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk)),
);
