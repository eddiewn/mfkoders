export const RenderPlayers = (players, whosTurn) => {
    players.forEach((player) => {
        if (players[whosTurn] === player) {
            console.log(`It is now player ${player.name}'s turn`);
        } else {
            console.log(`It is NOT player ${player.name}'s turn`);
        }
        const ArenaDiv = document.querySelector(".arena");

        const playerTurnDiv = document.createElement("div");
        playerTurnDiv.className = "playerTurnDiv";

        const playerTurnName = document.createElement("p");
        playerTurnName.textContent = player.name;

        const playerTurnHP = document.createElement("p");
        playerTurnHP.textContent = "HP: " + player.hp;

        playerTurnDiv.append(playerTurnName, playerTurnHP);

        ArenaDiv.appendChild(playerTurnDiv);
    });
};
