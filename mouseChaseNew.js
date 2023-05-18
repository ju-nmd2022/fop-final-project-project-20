let scenary;
let startScreen;
let hitTheWall;
let catGotYou;
let mouse;
let catStanding;
let catSitting;
let catLaying;
let cheeseBite;
let magicPotion;

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
  catLaying = loadImage("illustration/catLaying.png");

  //   powerups / points
  cheeseBite = loadImage("illustration/cheeseBite.png");
  magicPotion = loadImage("illustration/magicPotion.png");
}

function setup() {
  createCanvas(800, 600);
}

let gameIsActive = false;

const catArray = [catStanding, catSitting, catLaying];
const powerUpArray = [cheeseBite, magicPotion];

let characterMouseX = 350;
let characterMouseY = 500;

function mousePressed() {
  if (mouseX > 140 && mouseX < 390 && mouseY > 270 && mouseY < 360) {
    gameIsActive = true;
    characterMouseX = 350;
    console.log("hi");
  }
}

//generating cats

let x = Math.floor(Math.random() * 3);
console.log(x);

function catRandom() {
  if (gameIsActive === true) {
    if (x === 0) {
      console.log("cat standing");
    } else if (x === 1) {
      console.log("cat sitting");
    } else {
      console.log("cat laying");
    }
  }
}

catRandom();

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

    // still not working???
    if (characterMouseX > 720 || characterMouseX < -40) {
      console.log("hit");
      gameIsActive = false;
      image(hitTheWall, 0, 0, 800, 600);
    }
  }
}

//generating cats
let randomNumber;
let message;
function setRandomNumber() {
  randomNumber = Math.floor(Math.random() * 3);
  console.log(x);
}

function setMessage() {
  let randomCat;
  if (randomNumber === 0) {
    randomCat = catLaying;
  } else if (randomNumber === 1) {
    randomCat = catSitting;
  } else if (randomNumber === 2) {
    randomCat = catStanding;
  }
}
