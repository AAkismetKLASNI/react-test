import styles from '../../Main.module.css';
import { SearchLayout, OperationsLayout } from './components/index';

export const ActivityBarLayout = () => {
	return (
		<div className={styles.SearchAndCreateTaskContainer}>
			<div className={styles.ContainerMini}>
				<SearchLayout />
				<OperationsLayout />
			</div>
		</div>
	);
};
