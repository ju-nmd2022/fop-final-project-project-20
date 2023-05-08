// putting them in a preload makes them load before the setup
function preload() {
  // background
  scenary = loadImage("illustration/playScreen.png");

  //   character you play
  mouse = loadImage("illustration/mouse.PNG");

  //   obstacles
  catStanding = loadImage("illustration/catStanding.png");
  catSitting = loadImage("illustration/catSitting.PNG");
  catLaying = loadImage("illustration/catLaying");

  //   powerups / points
  cheeseBite = loadImage("illustration/cheeseBite.png");
  magicPotion = loadImage("illustration/magicPotion");
}

function setup() {
  createCanvas(800, 600);
}

function startButton() {
  fill(255, 255, 255);
  noStroke();
  rect(300, 200, 200, 50);
  fill(0, 0, 0);
  textSize(20);
  text(sentence1, 350, 230);
}

let gameIsActive = false;
const sentence1 = "Start game";
let characterMouseX = 350;
let characterMouseY = 500;

function mousePressed() {
  if (mouseX < 300 && mouseX > 500 && mouseY < 200 && mouseY > 250) {
    gameIsActive = true;
  }
}

function draw() {
  image(scenary, 0, 0, 800, 600);
  image(mouse, characterMouseX, characterMouseY, 120, 90);

  if (gameIsActive === true) {
    if (keyIsDown(39)) {
      characterMouseX = characterMouseX + 1;
    }
  } else {
    startButton();
  }
}
