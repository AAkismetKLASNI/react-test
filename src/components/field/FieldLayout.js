import styles from './field.module.css';
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
				<div className={styles.container}>
					{this.props.fields.map((field, index) => (
						<button
							className={styles.fieldBtn}
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
