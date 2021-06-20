const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    hammer = new Hammer(10,100);
    rubber = new Rubber(500,300,30);
    stone = new Stone(600,200,5);
    stone1 = new Stone(600,200,5);
    stone2 = new Stone(400,200,5);
    stone3 = new Stone(200,400,5);
    iron = new Iron(300,100);
    ball = new Ball(200,300,20);
    plane = new Plane(600,height,1200,20)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    hammer.display();
    rubber.display();
    stone.display();
    stone1.display();
    stone2.display();
    stone3.display();
    iron.display();
    ball.display();
    plane.display();
}