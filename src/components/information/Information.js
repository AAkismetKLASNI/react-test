import { InformationLayout } from './InformationLayout';
import { connect } from 'react-redux';
import {
	CHANGE_PLAYER_ON_X,
	GAME_IS_ENDED_FALSE,
	CLEAR_FIELDS,
	DRAW_FALSE,
} from '../../actions/index';
import { Component } from 'react';

export class InformationContainer extends Component {
	constructor(props) {
		super(props);

		this.startNewGame = this.props.startNewGame;
	}

	render() {
		return <InformationLayout startNewGame={this.startNewGame} />;
	}
}

const mapDispatchToProps = (dispatch) => ({
	startNewGame: () => {
		dispatch(DRAW_FALSE);
		dispatch(CLEAR_FIELDS);
		dispatch(CHANGE_PLAYER_ON_X);
		dispatch(GAME_IS_ENDED_FALSE);
	},
});

export const Information = connect(
	null,
	mapDispatchToProps,
)(InformationContainer);
