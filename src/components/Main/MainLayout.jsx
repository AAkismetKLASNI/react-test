import styles from './Main.module.css';
import { ActivityBarLayout, TodoListLayout } from './components/index';

export const MainLayout = ({}) => {
	return (
		<>
			<main>
				<div className={styles.Container}>
					<div className={styles.Wrapper}>
						<ActivityBarLayout />
						<TodoListLayout />
					</div>
				</div>
			</main>
		</>
	);
};
