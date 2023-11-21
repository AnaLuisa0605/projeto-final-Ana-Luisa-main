var towerImg, tower;
var ghost, ghostImg;
var climber, climberImg, climbersGroup;
var door, doorImg, doorGroups;

function preload(){
  towerImg = loadImage("tower.png");
  ghostImg = loadAnimation("ghost-standing.png", "ghost-jumping.png", "ghost-standing.png", "ghost-jumping.png");
  doorImg =  loadImage("door.png")
  climberImg = loadImage("climber.png")

}

function setup(){
  createCanvas(600,600);
  tower = createSprite(300, 300)
  tower.addImage(towerImg)
  tower.velocityY = 2;

  ghost = createSprite(200, 200, 50, 50)
  ghost.addAnimation("ghost", ghostImg)
  ghost.scale = 0.3
}

function draw(){
  if(tower.y > 400){
    tower.y = 300
  }
  spawWindows()
  drawSprites()
}

function spawWindows(){
  var door = createSprite(200, 50)
  door.addImage("door", doorImg)
  var climber = createSprite(200, 10)
  climber.addImage("climber", climberImg)
  door.velocityY = 1;
  climber.velocityY = 1;
}