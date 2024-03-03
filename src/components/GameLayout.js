import { Field, Information } from './index';
import styles from './GameLayout.module.css';
import PropTypes from 'prop-types';
import { useUpdateState } from '../hooks/use-update-state';

export const GameLayout = () => {
	const updateStateFunc = useUpdateState();

	return (
		<>
			<div className={styles.containerApp}>
				<Field updateStateFunc={updateStateFunc} />
				<Information updateStateFunc={updateStateFunc} />
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
