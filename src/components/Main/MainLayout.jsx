import styles from './Main.module.css';
import { ActivityBarLayout, TodoListContainer } from './components/index';

export const MainLayout = ({}) => {
	return (
		<>
			<main>
				<div className={styles.Container}>
					<div className={styles.Wrapper}>
						<ActivityBarLayout />
						<TodoListContainer />
					</div>
				</div>
			</main>
		</>
	);
};
