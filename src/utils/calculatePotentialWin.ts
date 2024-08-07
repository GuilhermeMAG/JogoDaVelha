const calculatePotentialWin = (
	squares: Array<string | null>,
	i: number,
	xIsNext: boolean
): boolean => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	const player = xIsNext ? "X" : "O";

	for (let line of lines) {
		const [a, b, c] = line;
		if (line.includes(i)) {
			const lineSquares = [squares[a], squares[b], squares[c]];
			const emptySquares = lineSquares.filter((s) => s === null).length;
			const playerSquares = lineSquares.filter((s) => s === player).length;
			if (emptySquares === 1 && playerSquares === 2) {
				return true;
			}
		}
	}
	return false;
};


export default calculatePotentialWin;