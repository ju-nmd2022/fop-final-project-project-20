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
    // console.log("hi");
  }
}

// no clue why it doesn't work

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
      // console.log("hit");
      gameIsActive = false;
      image(hitTheWall, 0, 0, 800, 600);
    }
  }
}

// cat position when showing up
let catX = Math.floor(Math.random() * 100 + 340);
console.log(catX);
let catY = 345;
let catSize = 1;

function catsDisplayed() {
  if (randomNumber === 0) {
    image(catLaying, catX, catY, 120 * catSize, 90 * catSize);
    catSize = catSize + 0.001;
    if (catX >= 400) {
      catX = catX + 1;
    } else if (catX <= 399) {
      catX = catX - 1;
    }
  } else if (randomNumber === 1) {
    image(catSitting, catX, catY, 120 * catSize, 90 * catSize);
    catSize = catSize + 0.001;
    if (catX >= 400) {
      catX = catX + 1;
    } else if (catX <= 399) {
      catX = catX - 1;
    }
  } else if (randomNumber === 2) {
    image(catStanding, catX, catY, 120 * catSize, 90 * catSize);
    catSize = catSize + 0.001;
    if (catX >= 400) {
      catX = catX + 1;
    } else if (catX <= 399) {
      catX = catX - 1;
    }
  }
}

//generating cats
let randomCat;
let catsX = 340;
let catsY = 400;
let catsS = 0.1;
(randomCat = catX), catY; //dont even ask im just trying stuff out

let randomNumber;
function setRandomNumber() {
  randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
}

function randomizedCat() {
  image(startScreen, 0, 0, 800, 600);

  if (gameIsActive === true) {
    image(scenary, 0, 0, 800, 600);

    if (randomNumber === 0) {
      image(catLaying, catsX, catsY, 120, 90);
      catsX = catsX + 1;
      catsS = catsS + 0.001;
    } else if (randomNumber === 1) {
      image(catSitting, catsX, catsY, 120, 90);
      catsX = catsX + 1;
      catsS = catsS + 0.001;
    } else if (randomNumber === 2) {
      image(catStanding, catsX, catsY, 120, 90);
      catsX = catsX + 1;
      catsS = catsS + 0.001;
    }
  }
}

randomizedCat();

//randomize number between boarders
function randomCatXPlacement() {
  x = Math.floor(Math.random() * 3);
  console.log(x);
  if (x === 0) {
    //randomCat is placed on 300,300 exempelvis
  }
}

/*let randomNumber;
let message;
function setRandomNumber() {
  randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
}

function setMessage() {
  if (randomNumber === 0) {
    randomCat = catLaying;
    
  } else if (randomNumber === 1) {
    randomCat = catSitting;
    
  } else if (randomNumber === 2) {
    randomCat = catStanding;
    
  }
}
*/
