// putting them in a preload makes them load before the setup
function preload() {
  scenary = loadImage("illustration/Background.png");
  mouse = loadImage("illustration/mouse.PNG");
  catStanding = loadImage("illustration/Cat_standing.png");
}

function setup() {
  createCanvas(1000, 800);
}

function draw() {
  image(scenary, 0, 0, 1000, 800);
  image(mouse, 475, 700, 150, 120);
}
