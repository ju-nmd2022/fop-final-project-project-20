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
      charachterMouseWidth,
      charachterMouseHeight
    );

    if (keyIsDown(39)) {
      characterMouseX = characterMouseX + 8;
    }
    if (keyIsDown(37)) {
      characterMouseX = characterMouseX - 8;
    }

    if (characterMouseX > 720 || characterMouseX < -40) {
      gameIsActive = "fail1";
      image(hitTheWall, 0, 0, 800, 600);
    }

    // objectsDisplayed();
    displayObjects();
    // catsDisplayed();
    displayCats();
    catCollision(arrayCatsShowing);
    powerUpCollision(arrayObjectsShowing);
  }
}

// a random number generator to decide on what cat to display
setInterval(random, 8000);
setInterval(randomX, 8000);

let randomNumberCats;
let catX;

function randomX() {
  catX = Math.floor(Math.random() * 100 + 350);
}

// // cat position when showing up

let catY = 310;
let catSize = 0.5;
let arrayCatsShowing = [];

function random() {
  const cats = {
    catPositionX: catX,
    catPositionY: catY,
    catSizing: catSize,
  };

  arrayCatsShowing.push(cats);
  randomNumberCats = Math.floor(Math.random() * 3);
}

function displayCats() {
  for (let cats of arrayCatsShowing) {
    image(
      catArray[randomNumberCats],
      cats.catPositionX,
      cats.catPositionY,
      120 * cats.catSizing,
      90 * cats.catSizing
    );
    cats.catSizing = cats.catSizing + 0.008;
    cats.catPositionY = cats.catPositionY + 0.4;
    if (cats.catPositionX >= 380) {
      cats.catPositionX = cats.catPositionX + 0.8;
    } else if (cats.catPositionX <= 379) {
      cats.catPositionX = cats.catPositionX - 0.8;
    }
  }
}

// function to display cats in positions
// function catsDisplayed() {
//   if (randomNumberCats === 0) {
//     image(catLaying, catX, catY, 120 * catSize, 90 * catSize);
//     catSize = catSize + 0.008;
//     catY = catY + 0.4;
//     if (catX >= 400) {
//       catX = catX + 0.8;
//     } else if (catX <= 399) {
//       catX = catX - 0.8;
//     }
//   } else if (randomNumberCats === 1) {
//     image(catSitting, catX, catY, 120 * catSize, 90 * catSize);
//     catSize = catSize + 0.008;
//     catY = catY + 0.4;
//     if (catX >= 400) {
//       catX = catX + 0.8;
//     } else if (catX <= 399) {
//       catX = catX - 0.8;
//     }
//   } else if (randomNumberCats === 2) {
//     image(catStanding, catX, catY, 120 * catSize, 90 * catSize);
//     catSize = catSize + 0.008;
//     catY = catY + 0.4;
//     if (catX >= 400) {
//       catX = catX + 0.8;
//     } else if (catX <= 399) {
//       catX = catX - 0.8;
//     }
//   }
// }

setInterval(random2, 12000);
setInterval(randomX2, 12000);

let randomNumberObjects;
let objectX;

function randomX2() {
  objectX = Math.floor(Math.random() * 100 + 300);
}

let objectY = 310;
let objectSize = 0.5;
let arrayObjectsShowing = [];

function random2() {
  const objects = {
    objectPositionX: objectX,
    objectPositionY: objectY,
    objectSizing: objectSize,
  };

  arrayObjectsShowing.push(objects);
  randomNumberObjects = Math.floor(Math.random() * 2);
}

function displayObjects() {
  for (let objects of arrayObjectsShowing) {
    image(
      powerUpArray[randomNumberObjects],
      objects.objectPositionX,
      objects.objectPositionY,
      90 * objects.objectSizing,
      60 * objects.objectSizing
    );
    objects.objectSizing = objects.objectSizing + 0.008;
    objects.objectPositionY = objects.objectPositionY + 0.4;
    if (objects.objectPositionX >= 380) {
      objects.objectPositionX = objects.objectPositionX + 0.8;
    } else if (objects.objectPositionX <= 379) {
      objects.objectPositionX = objects.objectPositionX - 0.8;
    }
  }
}

// function objectsDisplayed() {
//   if (randomNumberObjects === 0) {
//     image(cheeseBite, objectX, objectY, 90 * objectSize, 60 * objectSize);
//     objectSize = objectSize + 0.008;
//     objectY = objectY + 0.4;
//     if (objectX >= 400) {
//       objectX = objectX + 0.8;
//     } else if (objectX <= 399) {
//       objectX = objectX - 0.8;
//     }
//   } else if (randomNumberObjects === 1) {
//     image(magicPotion, objectX, objectY, 90 * objectSize, 60 * objectSize);
//     objectSize = objectSize + 0.008;
//     objectY = objectY + 0.4;
//     if (objectX >= 400) {
//       objectX = objectX + 0.8;
//     } else if (objectX <= 399) {
//       objectX = objectX - 0.8;
//     }
//   }
// }

let charachterMouseHeight = 90;
let charachterMouseWidth = 120;
let catWidth = 110;
let catHeight = 130;

function catCollision(cats) {
  if (
    catX + catWidth >= characterMouseX &&
    catX <= characterMouseX + charachterMouseWidth
  ) {
    if (catY + catHeight >= characterMouseY) {
      gameIsActive = "fail2";
      image(catGotYou, 0, 0, 800, 600);
    }
  }
}

let powerUpCollided = false;
let objectWidth = 120;
let objectHeight = 140;

function powerUpCollision(objects) {
  if (
    objects.objectPositionX + objectWidth >= characterMouseX &&
    objects.objectPositionX <= characterMouseX + charachterMouseWidth
  ) {
    if (objects.objectPositionY + objectHeight >= characterMouseY) {
      powerUpCollided = true;
      console.log("true");
    }
  }
}

function powerUpCaught() {
  if (powerUpCollided === true) {
    powerUpArray.style.display = "none";
    powerUpCollided = false;
  }
}
