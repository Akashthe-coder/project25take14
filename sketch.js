
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var dustbini,dustbinii,dustbin2i;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(800,670,width,20)
	dustbini= new Dustbin1(800,535,20,20)

	invisible1= new Invisible(1195,535,20,250)
	invisible2= new Invisible(1405,535,20,250)
	
	
	paper1= new Paper(250,450,70)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,0,0);
  
  ground.display();
  dustbini.display();
  //invisible1.display();
		//invisible2.display();
  
  paper1.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:1330,y:-995});
Matter.Body.setStatic(paper1.body,false)
	}
	if(keyCode===32){
		Body.setPosition(paper1.body,{x:200,y:600})
		Body.setStatic(paper1.body,true)
	}
}

