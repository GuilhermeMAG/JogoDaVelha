import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Square.module.css';

interface SquareProps {
	value: string | null;
	onSquareClick: () => void;
	highlight: boolean;
	potentialWin: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick, highlight, potentialWin}) => {
	const { theme } = useTheme();

	return (
		<button 
      className={`${styles.square} ${highlight ? styles.highlight : ''} ${potentialWin ? styles.potentialWin : ''} ${styles[theme]}`} 
      onClick={onSquareClick}
    >
			{value}
		</button>
	);
};

export default Square;
