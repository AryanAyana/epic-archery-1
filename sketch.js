const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 

   display() {
   var pos = this.body.position;
   var angle = this.body.angle;

   push();
   translate(pos.x, pos.y);
   rotate(angle);
   imageMode(CENTER);
   image(this.image, 0, 0, this.width, this.height);
  }


   //display Player and computerplayer


  }
