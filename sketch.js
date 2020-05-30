var wall,thickness;
var bullet,speed,weight;

thickness=random(22,38);

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  wall=createSprite(1200,200,thickness,height/2);

  speed=random(223,321);
  weight=random(30,52);

  hasCollided();

  drawSprites();
}
function hasCollided(Lbullet,Lwall) {
    bulletRightEdge=lbullet.x + bullet.width;
    wallLeftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge) {
      return true;
    }
      return false;

      if (hasCollided(bullet,wall)) {
        bullet.velocityX=0;
        var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);

        
        if(damage>10) {
          wall.shapeColor = color(225,0,0)
        }


        if(damage<10) {
          wall.shapeColor=color(0,225,0);
        }
      }
}