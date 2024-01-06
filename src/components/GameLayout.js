import { Field, Information } from './index';
import styles from './GameLayout.module.css';

export const GameLayout = () => {
	return (
		<>
			<div className={styles.containerApp}>
				<Field />
				<Information />
			</div>
		</>
	);
};
