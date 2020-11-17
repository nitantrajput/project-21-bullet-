var bullet;
var speed;
var weight;
var wall;
var box1,box2,box3;
var thickness;

function setup() {
  createCanvas(1000,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 40, 20);
  wall = createSprite(900,200,thickness,height/2);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);
  
  if(hasCollided(bullet , wall)){
    bullet.velocityX = 0;
  Damage = 0.5 * weight * speed * speed/
  wall.width * wall.width * wall.width;
  
  if(Damage > 10){
    wall.shapeColor = "red";
  }
  if(Damage < 10){
    wall.shapeColor = "green";
  }
}
  drawSprites();
}
function hasCollided(bullet , wall){
  bulletRightEdge = bullet.x + bullet.width/2
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false;
}