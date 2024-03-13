import { Field, Information } from './index';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class GameLayout extends Component {
	render() {
		return (
			<>
				<div className="flex items-center flex-col gap-10">
					<Field />
					<Information />
				</div>
			</>
		);
	}
}

GameLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
};
