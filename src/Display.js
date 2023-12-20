import { useState } from 'react';
import { NUMS, COMMANDS, OPERATIONS } from './core/constants';
import styles from './App.module.css';

export const Display = () => {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [colorResult, setColorResult] = useState(false);

	const clear = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
	};

	const getExpression = (operator) => {
		if (operator === '+') {
			setOperand1(Number(operand1) + Number(operand2));
			setOperand2('');
			setOperator('');
		} else if (operator === '-') {
			setOperand1(Number(operand1) - Number(operand2));
			setOperand2('');
			setOperator('');
		}
	};

	const calculationsDisplay = (event) => {
		const isNumber = event.target.closest('button[data-btn-number]');
		const isOperation = event.target.closest('button[data-operation]');
		const isCommand = event.target.closest('button[data-command]');

		if (isNumber) {
			setColorResult(false);
			if (operand1 !== '0' && operand2 !== '0') {
				!operator
					? setOperand1(operand1 + isNumber.value)
					: setOperand2(operand2 + isNumber.value);
			} else {
				!operator ? setOperand1(isNumber.value) : setOperand2(isNumber.value);
			}
		} else if (isOperation) {
			setColorResult(false);
			!operator
				? setOperator(operator + isOperation.value)
				: setOperator(isOperation.value);
		} else if (isCommand) {
			if (isCommand.value === 'C') {
				clear();
			} else if (isCommand.value === '=') {
				setColorResult(true);
				getExpression(operator);
			}
		}
	};

	return (
		<>
			<input
				className={styles.inputCalc}
				value={operand1 + operator + operand2}
				style={colorResult ? { color: '#FF0000' } : { color: '#fff' }}
			/>
			<div className={styles.wrapper} onClick={calculationsDisplay}>
				<div className={styles.containerNums}>
					{NUMS.map((num) => (
						<button value={num} key={num} data-btn-number={1}>
							{num}
						</button>
					))}
				</div>
				<div className={styles.containerOperation}>
					{OPERATIONS.map((operation) => (
						<button value={operation} key={operation} data-operation={2}>
							{operation}
						</button>
					))}
					{COMMANDS.map((command) => (
						<button value={command} key={command} data-command={3}>
							{command}
						</button>
					))}
				</div>
			</div>
		</>
	);
};
