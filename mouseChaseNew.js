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

    if (characterMouseX > 720 || characterMouseX < -40) {
      gameIsActive = false;
      image(hitTheWall, 0, 0, 800, 600);
    }

    /*if (catX == characterMouseX) {
      gameIsActive = false;
      image(catGotYou, 0, 0, 800, 600);
    }*/

    catsDisplayed();
    objectsDisplayed();
    catCollision();
  }
}

// a random number generator to decide on what cat to display
let randomNumberCats = Math.floor(Math.random() * 3);

// cat position when showing up
let catX = Math.floor(Math.random() * 100 + 300);
console.log(catX);
let catY = 310;
let catSize = 0.5;

// function to display cats in positions
function catsDisplayed() {
  if (randomNumberCats === 0) {
    image(catLaying, catX, catY, 120 * catSize, 90 * catSize);
    catSize = catSize + 0.008;
    catY = catY + 0.4
    if (catX >= 400) {
      catX = catX + 0.8;
    } else if (catX <= 399) {
      catX = catX - 0.8;
    }
  } else if (randomNumberCats === 1) {
    image(catSitting, catX, catY, 120 * catSize, 90 * catSize);
    catSize = catSize + 0.008;
    catY = catY + 0.4
    if (catX >= 400) {
      catX = catX + 0.8;
    } else if (catX <= 399) {
      catX = catX - 0.8;
    }
  } else if (randomNumberCats === 2) {
    image(catStanding, catX, catY, 120 * catSize, 90 * catSize);
    catSize = catSize + 0.008;
    catY = catY + 0.4
    if (catX >= 400) {
      catX = catX + 0.8;
    } else if (catX <= 399) {
      catX = catX - 0.8;
    }
  }
}

let randomNumberObjects = Math.floor(Math.random() * 2);
let objectX = Math.floor(Math.random() * 100 + 300);
let objectY = 310;
let objectSize = 0.5;

function objectsDisplayed() {
  if (randomNumberObjects === 0) {
    image(cheeseBite, objectX, objectY, 90 * objectSize, 60 * objectSize);
    objectSize = objectSize + 0.007;
    if (objectX >= 400) {
      objectX = objectX + 0.6;
    } else if (objectX <= 399) {
      objectX = objectY - 0.6;
    }
  } else if (randomNumberObjects === 1) {
    image(magicPotion, objectX, objectY, 90 * objectSize, 60 * objectSize);
    objectSize = objectSize + 0.007;
    if (objectX >= 400) {
      objectX = objectX + 0.5;
    } else if (objectX <= 399) {
      objectX = objectX - 0.5;
    }
  }
}



let charachterMouseHeight = 20;
let charachterMouseWidth = 20;
let catWidth = 40;
let catHeight = 40;

function catCollision(catArray, mouse){
  if(catX + catWidth >= characterMouseX && catX <= characterMouseX + charachterMouseWidth){
    if (catY + catHeight >= characterMouseY){
        gameIsActive = false;
      image(hitTheWall, 0, 0, 800, 600);
      }
    }
  } 
    

let inputElement = document.getElementById("name")
let addButton = document.getElementById("add")
let pointElement = document.getElementById("point")
let pointValue = 0
let pointArray = []

function pointCounter(){
pointValue = pointValue + 1;
}

addButton.addEventListener("click", savePoints);

inputElement.addEventListener("keypress", (event) => {
  if (event.code === "Enter") {
    savePoints();
  }
});

function savePoints(){
const points = (
  name: inputElement.value,
  number: pointValue
)

if (inputElement.value.lenght > 0){
  pointArray.push(points);
  displayPoints();
}
}

function displayPoints(points){
pointElement.innerHTML = "";

for(let points of pointArray){
  // Element where we put in all the other elements for points
  const pointsBuldingBlocks = document.createElement("div");

  // A span for text
  const inputName = document.createElement("span");
    inputName.innerText = points.name;
    pointsBuldingBlocks.appendChild(inputName);

    // Span for showing the points
    const collectedPoints = document.createElement("span");
    collectedPoints.innerText = points.number;
    pointsBuldingBlocks.appendChild(collectedPoints);

    //  Putting the collected elements to the place they should show
    pointElement.appendChild(pointsBuldingBlocks);
}
}
