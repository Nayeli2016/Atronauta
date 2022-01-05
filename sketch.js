var bg;
var sleep;
var brush;
var gym;
var eat;
var drink;
var astronaut;

function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
}
function preload(){
  bg=loadImage("images/iss.png");
  sleep=loadAnimation("images/sleep.png");
  brush=loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  //drink=loadAnimation("drink1.png","drink2.png");
}
function draw() {
  background(bg);
  drawSprites();
}