index.html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>Hikâye Oyunu</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div id="game">
  <div id="story"></div>
  <div id="choices"></div>
</div>

<script src="script.js"></script>
</body>
</html>
style.css
body {
  background: #0e0e0e;
  color: #eee;
  font-family: Arial;
}

#game {
  max-width: 600px;
  margin: 50px auto;
}

#story {
  font-size: 18px;
  margin-bottom: 20px;
}

button {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 12px;
  background: #222;
  color: white;
  border: none;
}
script.js
const scenes = {
  start: {
    text: "Gece. Sokak sessiz. Bir karar vermelisin.",
    choices: [
      { text: "İleri yürü", next: "street" },
      { text: "Geri dön", next: "home" }
    ]
  },

  street: {
    text: "Sokakta bir gölge fark ettin.",
    choices: [
      { text: "Seslen", next: "shout" },
      { text: "Saklan", next: "hide" }
    ]
  },

  home: {
    text: "Eve döndün ama içini kötü bir his kapladı.",
    choices: []
  }
};

function showScene(scene) {
  document.getElementById("story").innerText = scenes[scene].text;
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  scenes[scene].choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.onclick = () => showScene(choice.next);
    choicesDiv.appendChild(btn);
  });
}

showScene("start");