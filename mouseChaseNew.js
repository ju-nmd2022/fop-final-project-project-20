// putting them in a preload makes them load before the setup
function preload() {
  // background
  scenary = loadImage("illustration/playScreen.png");

  // startscreen
  startScreen = loadImage("illustration/startScreen.PNG");

  // result screens
  hitTheWall = loadImage("illustration/failWall.PNG");
  catGotYou = loadImage("illustration/failCaught.PNG");

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

let gameIsActive = false;

// const catArray = [catStanding, catSitting, catLaying];
// const powerUpArray = [cheeseBite, magicPotion];

let characterMouseX = 350;
let characterMouseY = 500;

function mousePressed() {
  if (mouseX > 140 && mouseX < 390 && mouseY > 250 && mouseY < 270) {
    gameIsActive = true;
    characterMouseX = 350;
    console.log("hi");
  }
}

function draw() {
  image(startScreen, 0, 0, 800, 600);

  if (gameIsActive === true) {
    image(scenary, 0, 0, 800, 600);
    image(mouse, characterMouseX, characterMouseY, 120, 90);
    if (keyIsDown(39)) {
      characterMouseX = characterMouseX + 8;
    }
    if (keyIsDown(37)) {
      characterMouseX = characterMouseX - 8;
    }

    if (characterMouseX > 800 && characterMouseX < 0) {
      gameIsActive = false;
      image(hitTheWall, 0, 0, 800, 600);
    }
  }
}
