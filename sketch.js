var car,wall;
var speed, weight,destruction;



function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90); 
weight = random(400,1500);



  wall = createSprite(1200,200,50,200);
  wall.shapeColor = color(80,80,80);


car = createSprite(50,200,10,30);
car.shapeColor = "white";


}

function draw() {
  background("black");  
 

car.velocityX = speed;

if(car.x - wall.x > (car.width+wall.width)/2){
car .velocityX = 0;
 destruction = 0.5 * weight * speed * speed/22500;


if(destruction>180){
  car.shapeColor = color(0,255,0);
  }
  
  if(destruction<180 && destruction>100){
  car.shapeColor = color(230,230,0);
  }
  
  if(destruction<100){
  car.shapeColor = color(255,0,0);
  }
  

}

  drawSprites();
}