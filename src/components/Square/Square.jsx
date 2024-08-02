import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./Square.module.css";

const Square = ({ value, onSquareClick, highlight }) => {
	const { theme } = useTheme();

	return (
		<button
			className={`${styles.square} ${highlight ? styles.highlight : ""} ${
				styles[theme]
			}`}
			onClick={onSquareClick}>
			{value}
		</button>
	);
};

export default Square;
