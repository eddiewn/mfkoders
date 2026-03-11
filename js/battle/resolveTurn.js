import { RenderArena } from "./RenderArena.js";

export const resolveTurn = async (players, chosenMoves) => {

    let player1 = players[0];
    let player2 = players[1];

    const attackOrder = [];
    if(player1.speed > player2.speed){
        attackOrder.push(player1, player2)
    }else{
        attackOrder.push(player2, player1)
    }

    const calculateDamage = (attacker, defender, move) => {
        let base = ((2 * 1 / 5 + 2) * move.power * attacker.attack / defender.defense) / 50 + 2;
        return base;
    }

    attackOrder.forEach(attacker => {
        console.log(attacker)
        let defender = players.find(p => p !== attacker);

        let chosenMove = players.indexOf(attacker);
        let move = chosenMoves[chosenMove];

        const damage = calculateDamage(attacker, defender, move)

        defender.takeDamage(Math.round(damage));

    });






    // chosenMoves = [];

    alert("Its battling time")
    RenderArena(players, 0, chosenMoves);
};