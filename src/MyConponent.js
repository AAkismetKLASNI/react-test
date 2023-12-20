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

	const calculationsDisplay = (item, type) => {
		if (type === 'NUMBER') {
			setColorResult(false);
			if (operand1 !== '0' && operand2 !== '0') {
				!operator ? setOperand1(operand1 + item) : setOperand2(operand2 + item);
			} else {
				!operator ? setOperand1(item) : setOperand2(item);
			}
		} else if (type === 'OPERATION') {
			setColorResult(false);
			if (!operator) {
				setOperator(operator + item);
			}
		} else {
			if (item === 'C') {
				clear();
			} else if (item === '=') {
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
				style={colorResult ? { color: '#FF0000' } : { color: '#000' }}
			/>
			<div className={styles.wrapper}>
				<div className={styles.containerNums}>
					{NUMS.map((num) => (
						<button
							value={num}
							key={num}
							onClick={() => calculationsDisplay(num, 'NUMBER')}
						>
							{num}
						</button>
					))}
				</div>
				<div className={styles.containerOperation}>
					{OPERATIONS.map((operation) => (
						<button
							value={operation}
							key={operation}
							onClick={() => calculationsDisplay(operation, 'OPERATION')}
						>
							{operation}
						</button>
					))}
					{COMMANDS.map((command) => (
						<button
							value={command}
							key={command}
							onClick={() => calculationsDisplay(command, 'COMMAND')}
						>
							{command}
						</button>
					))}
				</div>
			</div>
		</>
	);
};
