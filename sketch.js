const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var dropnum;
raindrops=[];
var walkingMan,walkingManImg;
var thunder1,thunder2,thunder3,thunder4;
var engine,world;
var umbrella;

function preload(){
 walkingManImg=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");  
thunder1=loadImage("1.png");
thunder2=loadImage("2.png");
thunder3=loadImage("3.png");
thunder4=loadImage("4.png");


}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  //engine=Engine.create;
 // engine=engine.world;

  walkingMan =createSprite(width/2-width/3,height/2+height/4,10,10);
  walkingMan.addAnimation("Walking",walkingManImg);
  walkingMan.scale=0.5;

  engine=Engine.create;
  engine=engine.world;


if (frameCount % 150 ===0){
  for(var dropnum=0;dropnum<200;dropnum++){
    raindrops.push(new Drops(random(0,width),random(0,height)));
  }
} 

umbrella=new Umbrella(width/2-width/3,height/2+height/4);
}

function draw(){
  background(0);
for (var dropnum=0;dropnum < 200;dropnum++){
raindrops[dropnum].display();
raindrops[dropnum].reposition();
} 

Thunder();

 drawSprites();   
}   

function Thunder(){
  rand=Math.round(random(1,4));
  if (frameCount%80===0){
  thunderCreatedFrame=frameCount;
  thunder= createSprite(random(0,width),random(0,width/4),10,10);
  switch(rand){
    case 1: thunder.addImage(thunder1);
    break;
    case 2: thunder.addImage(thunder2);
    break;
    default: break;
  }
  thunder.scale=random(0.3,0.6);
  thunder.lifetime=12;
}

}

