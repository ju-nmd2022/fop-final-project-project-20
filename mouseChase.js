// Buttons for starting and restarting game
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");

// Characters in the game
const catSitting = document.getElementById("catSittting");
const catStanding = document.getElementById("catStanding");
const catLaying = document.getElementById("catLying");
const mouse = document.getElementById("mouse");

// Other elements in the game
const magicPotion = document.getElementById("magicPotion");
const cheeseBite = document.getElementById("cheeseBite");

let gameIsActive = false;
const catArray = [catSitting, catStanding, catLaying];
const powerUpArray = [magicPotion, cheeseBite];

startButton.addEventListener("click", () => {
  gameIsActive = true;

  console.log("hello");
});
restartButton.addEventListener("click", () => {
  gameIsActive = true;
  console.log("hello");
});

function gameActive() {
  if (gameIsActive === true) {
  }
}
