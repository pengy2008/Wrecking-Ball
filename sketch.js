const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;

function setup(){
    createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(500,450,800,20);
}
function draw(){


ground.display();
}