import { Component } from 'react';

export class InformationLayout extends Component {
	constructor(props) {
		super(props);

		this.handlers = {
			startNewGame: this.props.startNewGame,
		};
	}

	render() {
		return <button onClick={this.props.startNewGame}>Начать заново</button>;
	}
}
