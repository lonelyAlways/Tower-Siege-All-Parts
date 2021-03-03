const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground,slingshot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var score=0

function preload(){
polygon_img=loadImage("polygon.png") 
}

function setup() {
 createCanvas(800,800);
 stroke(5)

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,300,250,20)
  box1=new Block(300,275,30,40)
  box2=new Block(330,275,30,40)
  box3=new Block(360,275,30,40)
  box4=new Block(390,275,30,40)
  box5=new Block(420,275,30,40)
  box6=new Block(450,275,30,40)
  box7=new Block(480,275,30,40)

  
  box8=new Block(330,235,30,40)
  box9=new Block(360,235,30,40)
  box10=new Block(390,235,30,40)
  box11=new Block(420,235,30,40)
  box12=new Block(450,235,30,40)

  box13=new Block(360,195,30,40)
  box14=new Block(390,195,30,40)
  box15=new Block(420,195,30,40)
  
  box16=new Block(390,195,30,40)

  var options={
    restitution:0.6,
    friction:0
  }
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingshot = new Slingshot(this.polygon,{x:100,y:200})
  
}

function draw() {
  
  background(0);  
  text("SCORE:"+score,650,50)
 
  Engine.update(engine);
  
  ground.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();

 box9.display();
 box10.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();

 box1.SCORE();
 box2.SCORE();
 box3.SCORE();
 box4.SCORE();
 box5.SCORE();
 box6.SCORE();
 box7.SCORE();
 box8.SCORE();

 box9.SCORE();
 box10.SCORE();
 box12.SCORE();
 box13.SCORE();
 box14.SCORE();
 box15.SCORE();
 box16.SCORE();

 imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingshot.display();
  
  
 drawSprites();
}

function mouseDragged(){
      Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
  
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);
  }
}

/*function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} */