import {getPokemon, getMove} from "./api.js";
import { Pokemon } from "./PokemonClass.js"


document.querySelector(".api-btn").addEventListener("click", async() => {
    await startBattle();
});

const createPlayerStates = async() => {
    const p1Pokemon = document.querySelector(".player-one-pokemon").value;
    // const p2Pokemon = document.querySelector(".player-two-pokemon").value;

    const pokemonOne = await getPokemon(p1Pokemon);

    const pokeObject = {
        name: pokemonOne.name
    }

    for (let index = 0; index < 4; index++) {
        getMove();
    }


    // await getPokemon(p2Pokemon);
};

const startBattle = async() => {
    await createPlayerStates();
    // getMove();
};
