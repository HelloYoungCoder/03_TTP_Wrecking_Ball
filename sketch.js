//Teacher Training Program

//Wrecking Ball Project

//Create Namespaces
const {Engine, World, Bodies, Body, Constraint, Mouse, MouseConstraint} = Matter;

//Create variables
var myengine, myworld;

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
  
  canvas = createCanvas(windowWidth/2 + 400,windowHeight-200);
  
  myengine = Engine.create(); //Create physics engine
  myworld = myengine.world; //Create physics world from engine

  //Using Mouse Constraints
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();

  let options = {
    mouse: canvasmouse
  };

  mConstraint = MouseConstraint.create(myengine, options);
  World.add(myworld, mConstraint);

  //Creating objects
  ball = new Pendulum(350, 250, "crimson");
  rope = new Sling(ball.body, {x: 350, y: 100});

  ground = new Ground(width/2, height-50, 1000, 45);

  box1 = new Block(500, 500, 40, 50, "powderblue");
  box2 = new Block(500, 450, 40, 50, "teal");
  box3 = new Block(500, 400, 40, 50, "powderblue");
  box4 = new Block(500, 350, 40, 50, "teal");
  box5 = new Block(500, 300, 40, 50, "powderblue");
  box6 = new Block(500, 250, 40, 50, "teal");
  box7 = new Block(500, 200, 40, 50, "powderblue");
  box8 = new Block(500, 150, 40, 50, "teal");

  box9 = new Block(540, 500, 40, 50, "teal");
  box10 = new Block(540, 450, 40, 50, "powderblue");
  box11 = new Block(540, 400, 40, 50, "teal");
  box12 = new Block(540, 350, 40, 50, "powderblue");
  box13 = new Block(540, 300, 40, 50, "teal");
  box14 = new Block(540, 250, 40, 50, "powderblue");
  box15 = new Block(540, 200, 40, 50, "teal");
  box16 = new Block(540, 150, 40, 50, "powderblue");

  box17 = new Block(580, 500, 40, 50, "powderblue");
  box18 = new Block(580, 450, 40, 50, "teal");
  box19 = new Block(580, 400, 40, 50, "powderblue");
  box20 = new Block(580, 350, 40, 50, "teal");
  box21 = new Block(580, 300, 40, 50, "powderblue");
  box22 = new Block(580, 250, 40, 50, "teal");
  box23 = new Block(580, 200, 40, 50, "powderblue");
  box24 = new Block(580, 150, 40, 50, "teal");

  box25 = new Block(620, 500, 40, 50, "teal");
  box26 = new Block(620, 450, 40, 50, "powderblue");
  box27 = new Block(620, 400, 40, 50, "teal");
  box28 = new Block(620, 350, 40, 50, "powderblue");
  box29 = new Block(620, 300, 40, 50, "teal");
  box30 = new Block(620, 250, 40, 50, "powderblue");
  
  box31 = new Block(660, 500, 40, 50, "powderblue");
  box32 = new Block(660, 450, 40, 50, "teal");
  box33 = new Block(660, 400, 40, 50, "powderblue");
  box34 = new Block(660, 350, 40, 50, "teal");
  box35 = new Block(660, 300, 40, 50, "powderblue");
  box36 = new Block(660, 250, 40, 50, "teal");

  box37 = new Block(700, 400, 40, 50, "teal");
  box38 = new Block(700, 350, 40, 50, "powderblue");
  box39 = new Block(700, 300, 40, 50, "teal");
  box40 = new Block(700, 250, 40, 50, "powderblue");

  box41 = new Block(740, 400, 40, 50, "powderblue");
  box42 = new Block(740, 350, 40, 50, "teal");
  box43 = new Block(740, 300, 40, 50, "powderblue");
  box44 = new Block(740, 250, 40, 50, "teal");
}

function draw() {
  
  background(78, 79, 135);  

  //Set text size & font
  fill("cream");
  textSize(22);
  textFont("Trebuchet MS");

  //Displaying Text
  text("Wrecking Ball Simulation",500,70);

  fill("black");
  textSize(15);
  text("Drag the Ball to simulate it",150,windowHeight/1.6);

  Engine.update(myengine); //Update to physics engine
  
  //Display Objects
  ball.display();
  rope.display();

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
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();

  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();

  box37.display();
  box38.display();
  box39.display();
  box40.display();

  box41.display();
  box42.display();
  box43.display();
  box44.display();

}

//Assign position of the ball 
function mouseDragged() {
  Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}