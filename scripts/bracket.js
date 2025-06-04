document.addEventListener("DOMContentLoaded", function () {
  const bracketContainer = document.getElementById("bracketContainer");

  function generateBracket() {
    const players = JSON.parse(localStorage.getItem("players")) || [];
    if (players.length < 2) {
      bracketContainer.innerHTML = "<p>Not enough players to generate a bracket.</p>";
      return;
    }

    let matchups = "";
    for (let i = 0; i < players.length; i += 2) {
      const player1 = players[i];
      const player2 = players[i + 1];

      matchups += `<div style="margin-bottom:10px;"><strong>Match ${i / 2 + 1}</strong>: ${player1.name} vs ${player2 ? player2.name : "TBD"}</div>`;
    }

    bracketContainer.innerHTML = matchups;
  }

  generateBracket();
});
