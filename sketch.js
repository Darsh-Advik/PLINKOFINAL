const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=240;
var ground;
var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(450, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(225,690,450,20)
	
  for(var k = 0; k <= width; k=k+90){
	divisions.push(new Divisions(k,height-divisionHeight/2,10,200));

}

for (var j = 40; j<=width; j=j+50)
{
	plinkos.push(new Plinko(j,75))
}
for (var j = 15; j<=width-10; j=j+50)
{
	plinkos.push(new Plinko(j,175))
}

for (var j = 40; j<=width; j=j+50)
{
	plinkos.push(new Plinko(j,275))
}
for (var j = 15; j<=width-10; j=j+50)
{
	plinkos.push(new Plinko(j,375))
}
  
}


function draw() {
  rectMode(CENTER);
  background("225");
  fill("lightblue")
  textSize(50);


  Engine.update(engine);

  for (var i = 0; i < plinkos.length; i++) {
     
	plinkos[i].display();
	
  }

  if(frameCount%30===0){
	particles.push(new Particle(random(width/2-100, width/2+120), 10,10));
	
  }


  for (var j = 0; j< particles.length; j++){
	  particles[j].display();
  }
  for (var k = 0; k< divisions.length; k++){
	divisions[k].display();
}

ground.display(); 
}

