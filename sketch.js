const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    block1 = new Block(890,322,30,50)
    block2 = new Block(920,322,30,50)
    block3 = new Block(950,322,30,50)
    block4 = new Block(980,322,30,50)
    block5 = new Block(1010,322,30,50)
    block6 = new Block(1040,322,30,50)
    block7 = new Block(1070,322,30,50)
    block8 = new Block(920,372,30,50)
    block9 = new Block(950,372,30,50)
    block10 = new Block(980,372,30,50)
    block11 = new Block(1010,372,30,50)
    block12 = new Block(1040,372,30,50)
    block13 = new Block(950,272,30,50)
    block14 = new Block(980,272,30,50)
    block15 = new Block(1010,272,30,50)
    block16 = new Block(980,222,30,50)
    ground1=new Ground(980,400,300,15)
    ground2=new Ground(600,590,1200,20)
    circle1 = new Circle(100,500,30)
}

function draw(){
    background(0,0,0)
    Engine.update(engine)
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    ground1.display()
    circle1.display()
    ground2.display()
}