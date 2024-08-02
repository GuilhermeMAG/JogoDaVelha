import React from 'react';
import Square from '../Square/Square';
import calculateWinner from '../../utils/calculateWinner';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Board.module.css';

interface BoardProps {
	xIsNext: boolean;
	squares: Array<string | null>;
	onPlay: (nextSquares: Array<string | null>) => void;
}

const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {
	const result = calculateWinner(squares);
	const winner = result ? result.winner : null;
	const winningLine = result ? result.line : [];
	const { theme } = useTheme();

	const handleClick = (i: number) => {
		if (winner || squares[i]) {
			return;
		}
		const nextSquares = squares.slice();
		nextSquares[i] = xIsNext ? 'X' : 'O';
		onPlay(nextSquares);
	};

	const renderSquare = (i: number) => {
		return (
			<Square
				value={squares[i]}
				onSquareClick={() => handleClick(i)}
				highlight={winningLine ? winningLine.includes(i) : false}
			/>
		);
	};

	let status;
	if (winner) {
		status = 'Vencedor: ' + winner;
	} else if (!squares.includes(null)) {
		status = 'Empate!';
	} else {
		status = 'Próximo jogador: ' + (xIsNext ? 'X' : 'O');
	}

	return (
		<>
			<div className={`${styles.status} ${theme}`}>{status}</div>
			<div className={styles["board-row"]}>
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className={styles["board-row"]}>
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className={styles["board-row"]}>
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</>
	);
};

export default Board;
