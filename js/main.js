import {getPokemon, getMove} from "./api.js";
import {Pokemon} from "./PokemonClass.js";

document.querySelector(".api-btn").addEventListener("click", async () => {
    await startBattle();
});

const createPlayerStates = async () => {
    const p1Pokemon = document.querySelector(".player-one-pokemon").value;
    const p2Pokemon = document.querySelector(".player-two-pokemon").value;

    const pokemons = [p1Pokemon, p2Pokemon];

    for (const pokemon of pokemons) {
        const fetchedPokemon = await getPokemon(pokemon);


        // Can only give out attack moves for now.
        let moves = [];
        while (moves.length !== 4) {
            const move = await getMove(
                Math.floor(Math.random() * fetchedPokemon.moves.length),
            );
            // console.log(move)
            if (move.damage_class.name === "physical") moves.push(move);
        }

        const idkMan = new Pokemon({
            name: fetchedPokemon.name,
            hp: fetchedPokemon.stats[0].base_stat,
            attack: fetchedPokemon.stats[1].base_stat,
            defense: fetchedPokemon.stats[2].base_stat,
            speed: fetchedPokemon.stats[3].base_stat,
            type: fetchedPokemon.types.map((type) => type.type.name),
            moves: moves,
        });

        console.log(idkMan);
    }
};

const startBattle = async () => {
    await createPlayerStates();
};
