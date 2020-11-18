var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 30);
  wall=createSprite(1400,200,30,height/2);
  speed=random(55,90);
  weight=(400,1500);
}

function draw() {
  background(0);  
  if(keyDown("space")){
    car.velocityX=speed;
  }
  if(wall.x-car.x<(car.width+car.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }
  if(wall.isTouching(car)){
    car.velocityX=0;
  }
  drawSprites();
}