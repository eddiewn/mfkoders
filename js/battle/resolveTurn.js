import { RenderArena } from "./RenderArena.js";

export const resolveTurn = async (players, chosenMoves) => {

    chosenMoves = [];

    alert("Its battling time")
    RenderArena(players, 0, chosenMoves);
};