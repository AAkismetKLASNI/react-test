import { Component } from 'react';

export class FieldLayout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fields: this.props.fields,
			handleClick: this.props.handleClick,
			motionGame: this.props.motionGame,
		};
	}

	render() {
		return (
			<>
				<div className="grid grid-cols-3  border   border-blue-500">
					{this.props.fields.map((field, index) => (
						<button
							className="w-20 h-20 bg-slate-600  border    border-white"
							key={index}
							onClick={() => this.props.handleClick(index)}
						>
							{field}
						</button>
					))}
				</div>
				<h3>{this.props.motionGame}</h3>
			</>
		);
	}
}
