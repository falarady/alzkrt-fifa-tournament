document.addEventListener("DOMContentLoaded", function () {
  const teamsContainer = document.getElementById("teamsContainer");

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function generateTeams() {
    const players = JSON.parse(localStorage.getItem("players")) || [];
    if (players.length < 2) {
      teamsContainer.innerHTML = "<p>Not enough players registered.</p>";
      return;
    }

    const shuffled = shuffle(players);
    let teamsHTML = "<ul>";

    for (let i = 0; i < shuffled.length; i += 2) {
      const player1 = shuffled[i];
      const player2 = shuffled[i + 1];
      const teamName = `Team ${i / 2 + 1}`;

      teamsHTML += `<li><strong>${teamName}</strong>: ${player1.name} & ${player2 ? player2.name : 'Waiting...'}</li>`;
    }

    teamsHTML += "</ul>";
    teamsContainer.innerHTML = teamsHTML;

    localStorage.setItem("teams", JSON.stringify(shuffled));
  }

  generateTeams();
});
