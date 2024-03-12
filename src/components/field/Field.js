import { Component } from 'react';
import { FieldLayout } from './FieldLayout';
import { WIN_PATTERNS } from '../../core/constants';
import { connect } from 'react-redux';
import {
	CHANGE_PLAYER_ON_O,
	CHANGE_PLAYER_ON_X,
	DRAW_TRUE,
	gameEndedIsTrue,
} from '../../actions/index';

export class FieldContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fields: this.props.fields,
			motionGame: this.props.motionGame,
			dispatch: this.props.dispatch,
			currentPlayer: this.props.currentPlayer,
		};
	}

	calculateWinner(fields) {
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
				return true;
			}
		}
		return null;
	}

	handleClick = (index) => {
		if (!this.calculateWinner(this.props.fields) && !this.props.fields[index]) {
			this.props.fields[index] = this.props.currentPlayer === 'X' ? 'X' : 'O';

			if (
				!this.calculateWinner(this.props.fields) &&
				this.props.fields.every((el) => el)
			) {
				this.props.dispatch(DRAW_TRUE);
			} else if (this.calculateWinner(this.props.fields)) {
				this.props.dispatch(gameEndedIsTrue(this.props.currentPlayer));
			} else {
				this.props.currentPlayer === 'X'
					? this.props.dispatch(CHANGE_PLAYER_ON_O)
					: this.props.dispatch(CHANGE_PLAYER_ON_X);
			}
		}
	};

	render() {
		return (
			<FieldLayout
				fields={this.props.fields}
				motionGame={this.props.motionGame}
				handleClick={this.handleClick}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	motionGame: state.motionGame,
	fields: state.fields,
});

export const Field = connect(mapStateToProps)(FieldContainer);
