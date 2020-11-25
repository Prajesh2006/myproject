const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var man1,man2,man3,man4;
var house1,house2,house3,house4,house5,house6;
var coin1,coin2,coin3
var distance=0
function preload() {
   
}


function setup(){
    createCanvas(displayWidth-30,displayHeight-100)
    engine = Engine.create();
    world = engine.world;
     
    man1=new man(displayWidth/2,displayHeight/2,30,30)
   // man2=new man(displayWidth/2-50,displayHeight/2+30,30,30)
  //  man3=new man(displayWidth/2-200,displayHeight/2+100,30,30)
    //man4=new man(displayWidth/2-100,displayHeight/2+70,30,30)

    house1=new house(displayWidth/2-650,displayHeight/2-300)
    house2=new house(displayWidth/2-450,displayHeight/2-300)
    house3=new house(displayWidth/2-250,displayHeight/2-300)
    house4=new house(displayWidth/2,displayHeight/2-300)
    house5=new house(displayWidth/2+250,displayHeight/2-300)
    house6=new house(displayWidth/2+450,displayHeight/2-300)

    coin1=new coins(displayWidth/4-50,displayHeight/2-30)
    coin2=new coins(displayWidth/4-10,displayHeight/2-30)
    coin3=new coins(displayWidth/4-90,displayHeight/2-30)

}

function draw(){
    background("black")
    Engine.update(engine);
    
   
    
    man1.display()
  //  man2.display()
  //  man3.display()
  //  man4.display()
    house1.display()
    house2.display()
    house3.display()
    house4.display()
    house5.display()
    house6.display()
    coin1.display()
    coin2.display()
    coin3.display()


   


}

function mouseDragged(){
  //  if(keyIsDown(UP_ARROW) ){
       
    //  distance=distance+10 
      Matter.Body.setPosition(man1.body,{x:mouseX,y:mouseY})
   // }
}