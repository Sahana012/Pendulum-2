const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var sling1,sling2,sling3,sling4,sling5;
var roof;



function setup() {
	createCanvas(850, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(300,300);
	bob2 = new Bob(350,300);
	bob3 = new Bob(400,300);
	bob4 = new Bob(450,300);
	bob5 = new Bob(500,300);

	sling1 = new Sling(bob1. body,{ x:300,y:50});

	sling2 = new Sling(bob2.body,{ x:350,y:50});

	sling3 = new Sling(bob3.body,{ x:400,y:50});

	sling4 = new Sling(bob4.body,{ x:450,y:50});

	sling5 = new Sling(bob5.body,{ x:500,y:50});

    roof = new Roof(400,40,500,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 232, 161);

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  sling5.display();  

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();



  roof.display();  
 
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -30, y: -25});
    }
}