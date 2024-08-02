import React from "react";
import Square from "../Square/Square";
import calculateWinner from "../../utils/calculateWinner";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./Board.module.css";

const Board = ({ xIsNext, squares, onPlay }) => {
	const result = calculateWinner(squares);
	const winner = result ? result.winner : null;
	const winningLine = result ? result.line : [];
	const { theme } = useTheme();

	const handleClick = (i) => {
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		const nextSquares = squares.slice();
		if (xIsNext) {
			nextSquares[i] = "X";
		} else {
			nextSquares[i] = "O";
		}
		onPlay(nextSquares);
	};

	const renderSquare = (i) => {
		return (
			<Square
				value={squares[i]}
				onSquareClick={() => handleClick(i)}
				highlight={winningLine.includes(i)}
			/>
		);
	};

	let status;
	if (winner) {
		status = "Winner: " + winner;
	} else if (!squares.includes(null)) {
		status = "Draw";
	} else {
		status = "Next player: " + (xIsNext ? "X" : "O");
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
