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
let catArray;
let powerUpArray;

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
  catArray = [catStanding, catSitting, catLaying];

  //   powerups / points
  cheeseBite = loadImage("illustration/cheeseBite.png");
  magicPotion = loadImage("illustration/magicPotion.png");
  powerUpArray = [cheeseBite, magicPotion];
}

function setup() {
  createCanvas(800, 600);
}
let gameIsActive = "start";
let sentence = 0;

function points() {
  fill(255);
  textSize(50);
  text(sentence, 700, 70);
}

function mousePressed() {
  if (mouseX > 140 && mouseX < 390 && mouseY > 270 && mouseY < 360) {
    gameIsActive = "active";
    characterMouseX = 350;
  }
}

let characterMouseX = 350;
let characterMouseY = 500;

function draw() {
  if (gameIsActive === "start") {
    image(startScreen, 0, 0, 800, 600);
  }

  if (gameIsActive === "active") {
    image(scenary, 0, 0, 800, 600);

    image(
      mouse,
      characterMouseX,
      characterMouseY,
      characterMouseWidth,
      characterMouseHeight
    );

    if (keyIsDown(39)) {
      characterMouseX = characterMouseX + 8;
    }
    if (keyIsDown(37)) {
      characterMouseX = characterMouseX - 8;
    }

    if (characterMouseX > 720 || characterMouseX < -40) {
      gameIsActive = "hitTheWall";
      image(hitTheWall, 0, 0, 800, 600);
      arrayCatsShowing = [];
      arrayObjectsShowing = [];
      sentence = 0;
    }

    points();
    displayObjects();
    displayCats();
    catCollision();
    powerUpCollision();
    powerUpCaught();
  }
}

// a random number generator to decide on what cat to display
setInterval(catObject, 10000);
setInterval(updatingX, 10000);

let randomNumberCats;
let catX;

// cat position when showing up
function updatingX() {
  catX = Math.floor(Math.random() * 100 + 300);
}
let catY = 310;
let catSize = 0.5;
let arrayCatsShowing = [];

function catObject() {
  const cats = {
    catPositionX: catX,
    catPositionY: catY,
    catSizing: catSize,
  };
  // console.log(cats);
  arrayCatsShowing.push(cats);
  randomNumberCats = Math.floor(Math.random() * 3);
}

function displayCats() {
  for (let cats of arrayCatsShowing) {
    image(
      catArray[randomNumberCats],
      cats.catPositionX,
      cats.catPositionY,
      80 * cats.catSizing,
      100 * cats.catSizing
    );
    cats.catSizing = cats.catSizing + 0.008;
    cats.catPositionY = cats.catPositionY + 0.4;
    if (cats.catPositionX >= 360) {
      cats.catPositionX = cats.catPositionX + 0.8;
    } else if (cats.catPositionX <= 359) {
      cats.catPositionX = cats.catPositionX - 0.8;
    }

    if (cats.catPositionY + catHeight >= 550) {
      arrayCatsShowing.shift();
    }
  }
}

setInterval(powerUpObject, 15000);
setInterval(updatingXPowerUp, 15000);

let randomNumberObjects;
let objectX;

function updatingXPowerUp() {
  objectX = Math.floor(Math.random() * 100 + 300);
}

let objectY = 310;
let objectSize = 0.5;
let arrayObjectsShowing = [];

function powerUpObject() {
  const objects = {
    objectPositionX: objectX,
    objectPositionY: objectY,
    objectSizing: objectSize,
  };
  // console.log(objects);
  arrayObjectsShowing.push(objects);
  randomNumberObjects = Math.floor(Math.random() * 2);
}

function displayObjects() {
  for (let objects of arrayObjectsShowing) {
    image(
      powerUpArray[randomNumberObjects],
      objects.objectPositionX,
      objects.objectPositionY,
      20 * objects.objectSizing,
      30 * objects.objectSizing
    );
    objects.objectSizing = objects.objectSizing + 0.008;
    objects.objectPositionY = objects.objectPositionY + 0.5;
    if (objects.objectPositionX >= 380) {
      objects.objectPositionX = objects.objectPositionX + 0.6;
    } else if (objects.objectPositionX <= 379) {
      objects.objectPositionX = objects.objectPositionX - 0.6;
    }

    if (objects.objectPositionY + objectHeight >= 550) {
      arrayObjectsShowing.shift();
    }
  }
}

let characterMouseHeight = 90;
let characterMouseWidth = 80;
let catWidth = 80;
let catHeight = 140;

function catCollision() {
  for (let cats of arrayCatsShowing) {
    if (
      characterMouseX < cats.catPositionX + catWidth &&
      characterMouseX + characterMouseWidth > cats.catPositionX
    ) {
      if (cats.catPositionY + catHeight >= characterMouseY) {
        gameIsActive = "catGotYou";
        image(catGotYou, 0, 0, 800, 600);
        arrayCatsShowing = [];
        arrayObjectsShowing = [];
        sentence = 0;
      }
    }
  }
}

let powerUpCollided = false;
let objectWidth = 80;
let objectHeight = 80;

function powerUpCollision(objects) {
  for (let objects of arrayObjectsShowing) {
    if (
      objects.objectPositionX + objectWidth - 20 >= characterMouseX &&
      objects.objectPositionX <= characterMouseX + characterMouseWidth
    ) {
      if (objects.objectPositionY + objectHeight >= characterMouseY) {
        powerUpCollided = true;
        arrayObjectsShowing.shift();
        console.log("true");
      }
    }
  }
}

function powerUpCaught() {
  if (powerUpCollided === true) {
    sentence = sentence + 1;
    powerUpCollided = false;
  }
}
