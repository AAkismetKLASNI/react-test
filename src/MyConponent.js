import { useState } from 'react';
import styles from './App.module.css';

export const Display = () => {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [colorResult, setColorResult] = useState(false);

	const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const OPERATIONS = ['+', '-'];
	const COMMANDS = ['C', '='];

	const calculationsNums = (event) => {
		const isNum = event.target.closest('.num');
		const isOperation = event.target.closest('.op');
		const isCommand = event.target.closest('.command');

		if (isNum) {
			setColorResult(false);
			if (operator.length === 0) {
				operand1 === '0'
					? setOperand1(isNum.value)
					: setOperand1(operand1 + isNum.value);
			} else {
				operand2 === '0'
					? setOperand2(isNum.value)
					: setOperand2(operand2 + isNum.value);
			}
		} else if (isOperation) {
			setColorResult(false);
			if (operator.length === 0) {
				setOperator(() => operator + isOperation.value);
			}
		} else if (isCommand) {
			if (isCommand.value === 'C') {
				setOperand1('');
				setOperand2('');
				setOperator('');
			} else if (String(isCommand.value) === '=') {
				setColorResult(true);
				if (operand1.length !== 0 || operand2.length !== 0) {
					if (operator === '+') {
						const result = Number(operand1) + Number(operand2);
						setOperand1(String(result));
						setOperand2('');
						setOperator('');
					} else if (operator === '-') {
						const result = Number(operand1) - Number(operand2);
						setOperand1(String(result));
						setOperand2('');
						setOperator('');
					}
				}
			}
		}
	};

	return (
		<>
			<input
				className={styles.inputCalc}
				value={operand1 + operator + operand2}
				style={colorResult ? { color: '#FF0000' } : { color: '#000' }}
			/>
			<div className={styles.wrapper} onClick={calculationsNums}>
				<div className={styles.containerNums}>
					{NUMS.map((num) => (
						<button value={num} className="num" key={num}>
							{num}
						</button>
					))}
				</div>
				<div className={styles.containerOperation}>
					{OPERATIONS.map((operation) => (
						<button value={operation} className="op" key={operation}>
							{operation}
						</button>
					))}
					{COMMANDS.map((command) => (
						<button value={command} className="command" key={command}>
							{command}
						</button>
					))}
				</div>
			</div>
		</>
	);
};
