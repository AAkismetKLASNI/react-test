import styles from './App.module.css';

import { Display } from './MyConponent';

export const App = () => {
	return (
		<div className={styles.appHeader}>
			<div className={styles.containerCalc}>
				<Display />
			</div>
		</div>
	);
};
