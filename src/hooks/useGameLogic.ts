import { useContext } from "react";
import GameContext from "../contexts/GameContext";

const useGameLogic = () => {
	const context = useContext(GameContext);
	if (!context) {
		throw new Error("useGameLogic must be used within a GameProvider");
	}
	return context;
};

export default useGameLogic;
