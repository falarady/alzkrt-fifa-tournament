document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.querySelector("input[placeholder='Player Name']").value;
    const phone = form.querySelector("input[placeholder='Phone Number']").value;

    if (!name) {
      alert("Please enter a player name.");
      return;
    }

    const newEntry = {
      name: name,
      phone: phone
    };

    let players = JSON.parse(localStorage.getItem("players")) || [];
    players.push(newEntry);
    localStorage.setItem("players", JSON.stringify(players));

    alert("Registration successful!");
    form.reset();
  });
});
