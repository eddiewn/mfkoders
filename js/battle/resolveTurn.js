import {RenderArena} from "./RenderArena.js";
import { calculateTypeDamageMultiplier } from "./typeDamageMultiplier.js";

export const resolveTurn = async (players, chosenMoves) => {
    console.log(chosenMoves);

    let player1 = players[0];
    let player2 = players[1];

    let attackOrder = [];
    if (player1.speed > player2.speed) {
        attackOrder.push(player1, player2);
    } else {
        attackOrder.push(player2, player1);
    }

    const calculateDamage = (attacker, defender, move) => {
        //Göra denna dynamisk sen om du vill implementera
        let pokemonLevel = 1;


        let base =
            (((2 * pokemonLevel) / 5 + 2) * move.power * attacker.attack) /
                defender.defense /
                50 +
            2;

            console.log(defender, move);

            const damageTypeMultiplier = calculateTypeDamageMultiplier(move.type.name, defender.type);

            base * damageTypeMultiplier;

            //Rolls if attack should crit
            const roll = Math.floor(Math.random() * 24)
            console.log(roll)
            if(roll === 15){
                console.log(`Attack critted for ${base * 1.5} instead of ${base}`)
                base * 1.5;
            }

        return Math.floor(base);
    };

    attackOrder.forEach((attacker) => {
        console.log(attacker);
        let defender = players.find((p) => p !== attacker);

        let chosenMove = players.indexOf(attacker);
        let move = chosenMoves[chosenMove];

        const damage = calculateDamage(attacker, defender, move);

        defender.takeDamage(damage);
    });

    chosenMoves = [];
    attackOrder = [];

    alert("Its battling time");
    RenderArena(players, 0, chosenMoves);
};
