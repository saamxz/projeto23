
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bloco 
var angulo=60
function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);



	engine = Engine.create();
	world = engine.world;
var particle_options = {
restituition:0.4,
friction:0.2
}
particle1 = Bodies.circle(220,10,10,particle_options)
World.add(world,particle1)
	//Crie os Corpos aqui.
 var plane_options={
 isStatic: true

 }
bloco=Bodies.rectangle(500,300,150,30,plane_options);
World.add(world,bloco)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine)
  drawSprites();
 Matter.Body.rotate(bloco,angulo)
 push();
 translate(bloco.position.x,bloco.position.y)
 rotate(angulo);
 rect (0,0,150,20);
 pop();
 angulo +=0.2
 ellipse(particle1.position.x,particle1.position.y,10,10)
}



