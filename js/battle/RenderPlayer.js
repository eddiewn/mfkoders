export const RenderPlayers = (players, whosTurn) => {
    players.forEach((player) => {


        const ArenaDiv = document.querySelector(".arena")

        const TopContainer = document.querySelector(".top-container");
        const BottomContainer = document.querySelector(".bottom-container");

        ArenaDiv.appendChild(TopContainer, BottomContainer);


        const playerDiv = document.createElement("div");
        playerDiv.className = "playerDiv";

        const playerSprite = document.createElement("img");

        const playerTurnName = document.createElement("p");
        playerTurnName.textContent = player.name;

        const playerTurnHP = document.createElement("p");
        playerTurnHP.textContent = "HP: " + player.hp;

        playerDiv.append(playerSprite, playerTurnName, playerTurnHP);

        if (players[whosTurn] === player) {
            console.log(`It is now player ${player.name}'s turn`);
            playerSprite.src = player.frontSprite;
            BottomContainer.appendChild(playerDiv);

        } else {
            console.log(`It is NOT player ${player.name}'s turn`);
            playerSprite.src = player.backSprite;
            TopContainer.appendChild(playerDiv)
        }
    });
};
