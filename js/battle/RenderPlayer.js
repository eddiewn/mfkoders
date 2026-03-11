export const RenderArena = (players, whosTurn, chosenMoves) => {

    document.body.innerHTML = "";
    const ArenaDiv = document.createElement("div");
    ArenaDiv.className = "arena";

    const TopContainer = document.createElement("div");
    TopContainer.className = "top-container";

    const BottomContainer = document.createElement("div");
    BottomContainer.className = "bottom-container";

    const MoveContainer = document.createElement("div")
    MoveContainer.className= "move-container";

    ArenaDiv.append(TopContainer, BottomContainer, MoveContainer);

    const body = document.querySelector("body");
    body.appendChild(ArenaDiv);


    players.forEach((player) => {

        const TopContainer = document.querySelector(".top-container");
        const BottomContainer = document.querySelector(".bottom-container");

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
            playerSprite.src = player.backSprite;
            BottomContainer.appendChild(playerDiv);

            player.moves.forEach(move => {
                const moveContainer = document.querySelector(".move-container");
                const moveButton = document.createElement("button");

                moveButton.addEventListener("click", () => {
                    chosenMoves[whosTurn] = move.name;
                    console.log(chosenMoves)
                    whosTurn++;
                    RenderArena(players, whosTurn, chosenMoves);

                    if(whosTurn > 1){
                        console.log("battle time");
                    }
                })
                moveButton.textContent = move.name;
                moveContainer.appendChild(moveButton);
            });

        } else {
            console.log(`It is NOT player ${player.name}'s turn`);
            playerSprite.src = player.frontSprite;
            TopContainer.appendChild(playerDiv)
        }
    });
};
