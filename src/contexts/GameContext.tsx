import React, { createContext, useState, ReactNode } from 'react';

interface GameContextProps {
	history: Array<Array<string | null>>;
	currentMove: number;
	xIsNext: boolean;
	currentSquares: Array<string | null>;
	handlePlay: (nextSquares: Array<string | null>) => void;
	jumpTo: (nextMove: number) => void;
	resetGame: () => void;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

interface GameProviderProps {
	children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const xIsNext = currentMove % 2 === 0;
	const currentSquares = history[currentMove];

	const handlePlay = (nextSquares: Array<string | null>) => {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	};

	const jumpTo = (nextMove: number) => {
		setCurrentMove(nextMove);
	};

	const resetGame = () => {
		setHistory([Array(9).fill(null)]);
		setCurrentMove(0);
	};

	return (
		<GameContext.Provider value={{ history, currentMove, xIsNext, currentSquares, handlePlay, jumpTo, resetGame }}>
			{children}
		</GameContext.Provider>
	);
};

export default GameContext;
