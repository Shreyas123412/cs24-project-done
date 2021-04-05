const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    cube1 = new Cube(700,320,70,70);
    cuboid1 = new cuboid(600, 280, 70, 50);
    circle1 = new circle(640, 240, 90, 50);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    cube1.display();
    cuboid1.display();
    circle1.display();

    
 
}