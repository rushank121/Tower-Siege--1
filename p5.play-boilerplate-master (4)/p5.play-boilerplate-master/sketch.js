const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new BlueBox(500,360,20,30);
  box2 = new BlackBox(520,360,20,30);
  box3 = new GreenBox(540,360,20,30);
  box4 = new BlueBox(560,360,20,30);
  box5 = new GreenBox(580,360,20,30);
  box6 = new BlackBox(600,360,20,30);
  box7 = new BlueBox(510,330,20,30);
  box8 = new BlackBox(530,330,20,30);
  box9 = new BlueBox(550,330,20,30);
  box10 = new GreenBox(570,330,20,30);
  box11 = new BlueBox(590,330,20,30);
  box12 = new BlackBox(520,310,20,30);
  box13 = new BlueBox(540,310,20,30);
  box14 = new BlueBox(560,310,20,30);
  box15 = new GreenBox(580,310,20,30);
  box16 = new BlackBox(530,280,20,30);
  box17 = new BlueBox(550,280,20,30);
  box18 = new GreenBox(570,280,20,30);
  box19 = new BlueBox(540,250,20,30);
  box20 = new BlueBox(560,250,20,30);
  box21 = new GreenBox(550,220,20,30);
  box22 = new GreenBox(500,135,20,30);
  box23 = new BlueBox(520,135,20,30);
  box24 = new BlackBox(540,135,20,30);
  box25 = new BlueBox(560,135,20,30);
  box26 = new GreenBox(580,135,20,30);
  box27 = new BlackBox(600,135,20,30);
  box28 = new BlueBox(510,105,20,30);
  box29 = new BlueBox(530,105,20,30);
  box30 = new BlackBox(550,105,20,30);
  box31 = new GreenBox(570,105,20,30);
  box32 = new BlueBox(590,105,20,30);
  box33 = new BlackBox(520,75,20,30);
  box34 = new BlueBox(540,75,20,30);
  box35 = new BlueBox(560,75,20,30);
  box36 = new GreenBox(580,75,20,30);
  box37 = new BlackBox(530,45,20,30);
  box38 = new BlueBox(550,45,20,30);
  box39 = new GreenBox(570,45,20,30);
  ball = new Ball(0,0,50);
  ground = new Floor(400,390,800,20);
  groundHovering = new Floor(550,160,200,20);
}

function draw() {
  background(247, 223, 178);
  Engine.update(engine);  
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
  ball.display();
  ground.display();
  groundHovering.display();
} 
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}