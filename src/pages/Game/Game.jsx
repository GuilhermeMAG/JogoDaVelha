import React from "react";
import Board from "../../components/Board/Board";
import useGameLogic from "../../hooks/useGameLogic";
import styles from "./Game.module.css";

const Game = () => {
	const { xIsNext, currentSquares, handlePlay, history, jumpTo, resetGame } =
		useGameLogic();

	const moves = history.map((_squares, move) => {
		const description = move ? `Go to move #${move}` : "Go to game start";
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		);
	});

	return (
		<div className={styles.game}>
			<div className={styles["game-board"]}>
				<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
			</div>
			<div className={styles["game-info"]}>
				<ol>{moves}</ol>
			</div>
			<button className={styles["restart-button"]} onClick={resetGame}>
				Restart Game
			</button>
		</div>
	);
};

export default Game;
