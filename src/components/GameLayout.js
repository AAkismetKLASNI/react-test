import { Field, Information } from './index';
import styles from './GameLayout.module.css';
import PropTypes from 'prop-types';

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

GameLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
};
