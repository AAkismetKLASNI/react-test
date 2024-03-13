import { Component } from 'react';

export class InformationLayout extends Component {
	constructor(props) {
		super(props);

		this.handlers = {
			startNewGame: this.props.startNewGame,
		};
	}

	render() {
		return (
			<button
				className="bg-gray-500 border p-2 text-3xl"
				onClick={this.props.startNewGame}
			>
				Начать заново
			</button>
		);
	}
}
