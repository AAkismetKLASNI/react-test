import styles from './Main.module.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { NotFound, MainTodoContainer, MainTodoListLayout } from '../index';

export const MainLayout = (props) => {
	return (
		<>
			<main>
				<div className={styles.Container}>
					<div className={styles.Wrapper}>
						<Routes>
							<Route path="/" element={<MainTodoListLayout {...props} />} />
							<Route
								path="/todo/:id"
								element={<MainTodoContainer {...props} />}
							/>
							<Route path="/404" element={<NotFound />} />
							<Route path="*" element={<Navigate to="/404" />} />
						</Routes>
					</div>
				</div>
			</main>
		</>
	);
};
