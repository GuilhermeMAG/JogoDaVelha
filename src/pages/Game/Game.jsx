import React from "react";
import Board from "../../components/Board/Board";
import useGameLogic from "../../hooks/useGameLogic";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./Game.module.css";

const Game = () => {
	const { xIsNext, currentSquares, handlePlay, history, jumpTo, resetGame } =
		useGameLogic();
	const { theme, toggleTheme } = useTheme();

	const moves = history.map((_squares, move) => {
		const description = move ? `Go to move #${move}` : "Go to game start";
		return (
			<li key={move}>
				<button className={styles["move-button"]} onClick={() => jumpTo(move)}>
					{description}
				</button>
			</li>
		);
	});

	return (
		<div className={`${styles.game} ${styles[theme]}`}>
			<button className={styles["theme-toggle"]} onClick={toggleTheme}>
				Toggle Theme
			</button>
			<h1 className={styles.title}>Tic-Tac-Toe</h1>
			<div
				className={`${styles["game-board"]} ${
					theme === "dark" ? styles.dark : ""
				}`}>
				<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
			</div>
			<div
				className={`${styles["game-info"]} ${theme === "dark" ? styles.dark : ""}`}>
				<ol className={styles["game-info-ol"]}>{moves}</ol>
				<button className={styles["restart-button"]} onClick={resetGame}>
					Restart Game
				</button>
			</div>
		</div>
	);
};

export default Game;
