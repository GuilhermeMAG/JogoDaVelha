import React from "react";
import styles from "./Square.module.css";

const Square = ({ value, onSquareClick, highlight }) => {
	return (
		<button
			className={`${styles.square} ${highlight ? styles.highlight : ""}`}
			onClick={onSquareClick}>
			{value}
		</button>
	);
};

export default Square;
