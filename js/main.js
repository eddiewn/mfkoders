import {getPokemon, getMove} from "./api.js";

document.querySelector(".api-btn").addEventListener("click", async() => {
    await startBattle();
});

const createPlayerStates = async() => {
    const p1Pokemon = document.querySelector(".player-one-pokemon").value;
    const p2Pokemon = document.querySelector(".player-two-pokemon").value;

    await getPokemon(p1Pokemon);
    await getPokemon(p2Pokemon);
};

const startBattle = async() => {
    await createPlayerStates();
    // getMove();
};
