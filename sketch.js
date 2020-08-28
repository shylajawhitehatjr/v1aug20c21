var fixedRect, movingRect;
var obj1,obj2,obj3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
obj1=createSprite(100,100,50,50);
obj1.shapeColor="green";

obj2=createSprite(200,100,50,40);
obj2.shapeColor="green";

obj3=createSprite(300,100,50,50);
obj3.shapeColor="green";

obj4=createSprite(400,100,50,80);
obj5=createSprite(400,800,80,30);

obj4.velocityY=5;
obj5.velocityY=-5;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //collision();

  bounceoff(obj4,obj5);

  
  if (collision(movingRect,obj2)) {
  movingRect.shapeColor = "red";
  obj2.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  obj2.shapeColor = "green";
}
  
  drawSprites();
}


function collision(rect1,rect2)

{

  if (rect1.x - rect2.x < rect1.width/2 + rect2.width/2
    && rect2.x - rect1.x < rect1.width/2 + rect2.width/2
    &&rect1.y - rect2.y < rect1.height/2 + rect2.height/2
    && rect2.y - rect1.y < rect1.height/2 + rect2.height/2) {
 return true;
}
else {
  return false;
}
}

function bounceoff(rect1,rect2)
{
  if (rect1.x - rect2.x < rect1.width/2 + rect2.width/2
    && rect2.x - rect1.x < rect1.width/2 + rect2.width/2)


    {

      rect1.velocityX=rect1.velocityX * (-1);
      rect2.velocityX=rect2.velocityX*(-1);
    }

    if(rect1.y - rect2.y < rect1.height/2 + rect2.height/2
      && rect2.y - rect1.y < rect1.height/2 + rect2.height/2)

      {

        rect1.velocityY=rect1.velocityY* (-1);
        rect2.velocityY=rect2.velocityY*(-1);

      }

}


