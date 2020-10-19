const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2;
var box1,box2,box3,box4,box5,box6,box6,box7,box8;
var box9,box10,box11,box12,box13,box14;

function setup() {
    canvas = createCanvas(1200,400);
    stand1 = new Ground(350,50,100,10);
    stand2 = new Ground(450,150,80,10);

    box1 = new Box(600,200,20,20);
    box2 = new Box(540,200,20,20);
    box3 = new Box(560,200,20,20);
    box4 = new Box(520,200,20,20);
    box5 = new Box(680,200,20,20);
    box6 = new Box(200,200,20,20);
    box7 = new Box(480,200,20,20);
    box8 = new Box(100,200,20,20);
    box9 = new Box(200,200,20,20);
    box10 = new Box(200,200,20,20);
    box11 = new Box(200,200,20,20);
    box12 = new Box(200,200,20,20);
    box13 = new Box(200,200,20,20);
    box14 = new Box(200,200,20,20);
}

function draw(){
  background(255,255,255);  
  drawSprites();
}