var thickness,wall;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);

  speed=random(30,52);
  weight=random(223,321);
  thickness=random(22,83)

wall = createSprite(1200,200,thickness,height/2);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  

  World.update(wall);

  if(wall.x-car.x<(car.width=wall.width)/2);
  {
car.velocityX=0;
var deformation=0.5 * weight * speed *speed/22509;
if(deformation<100)
{
  car.shapeColor=color(255,0,0);
}
if(deformation<100 && deformation>100)
{
  car.shapeColor=color(230,230,0)
}
if(deformation<100)
{
  car.shapeColor=color(0,255,0);
}
  }

  wall.shapeColor=color(80,80,80);

  drawSprites();
}

function hasCollided(Lbullet,Lwall)
{
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=)
}