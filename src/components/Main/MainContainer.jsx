import { MainLayout } from './MainLayout';
import { useRequestGetTodo } from '../../hooks/index';

export const MainContainer = () => {
	useRequestGetTodo();

	return <MainLayout />;
};
