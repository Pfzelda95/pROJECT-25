
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var engine,world;
var ball,ground;
var d1,d2,d3;
var db1;

function setup() {
	createCanvas(1699, 700);
	engine = Engine.create();
	world = engine.world;
	
	
	//Create the Bodies Here.
	ground = new box(400,650,2000,5);
	ground.shapeColor = "green";
	d1 = new box(650,602,5,80);
	d2 = new box(750,602,5,80);
	d3 = new box(700,645,100,5);
	ball = new Ball();
	db1 = new db(700,602,1,1);
	
	  Engine.run(engine);
	 
}


function draw() {
 rectMode(CENTER);
  background("white");
  d1.display();
  d2.display();
  d3.display();
  ball.display();
  ground.display();
   ball.keyPressed();
   db1.display();
  drawSprites();
 // keyPressed();
}



































