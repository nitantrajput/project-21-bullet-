var bullet;
var speed;
var weight;
var wall;
var box1,box2,box3;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 40, 40);
  wall = createSprite(1200,200,thickness,height/2);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);
  bullet.collide(wall);
  //if(bullet.isTouching(wall)){
  //  bullet.velocityX = 0;
  //  }
  Damage = 0.5 * bulletWeight * bulletSpeed * bulletSpeed/
  wall.width * wall.width * wall.width
  
  if(Damage > 10){
    wall.shapecolor = "red";
  }
  if(Damage < 10){
    wall.shapecolor = "green";
  }
  drawSprites();
}