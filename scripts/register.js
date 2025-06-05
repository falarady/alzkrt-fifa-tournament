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

    const data = {
      sheet1: {
        playerName: name,
        phoneNumber: phone,
        timestamp: new Date().toISOString()
      }
    };

    fetch("https://api.sheety.co/fcedbc61fa9860d301bd27034d81b32f/alzkrtPlayerRegistrations/sheet1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json().then(dataRes => {
      if (response.ok) {
        window.location.href = "success.html";
      } else {
        console.error("Error response from Sheety:", dataRes);
        alert("Error: " + JSON.stringify(dataRes));
      }
    }))
    .catch(error => {
      console.error("Network error:", error);
      alert("Network Error: " + error);
    });
  });
});
