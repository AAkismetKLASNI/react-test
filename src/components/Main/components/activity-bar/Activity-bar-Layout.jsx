import styles from '../../Main.module.css';
import { SearchContainer, OperationsContainer } from './components/index';

export const ActivityBarLayout = () => {
	return (
		<div className={styles.SearchAndCreateTaskContainer}>
			<div className={styles.ContainerMini}>
				<SearchContainer />
				<OperationsContainer />
			</div>
		</div>
	);
};
