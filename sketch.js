var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
//var particle
var turn=0
var Gamestate= "end";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  


   for (var k = 0; k <=width; k = k + 90) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 15, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
  
//if(particle.body.position.y>760) {
 // if(particle.body.position.x< 300)/*
 //{
 //   score= score+500
  //  particle=null
  //  if(turn>= 5)
  //  {
  //    Gamestate==="end"
   // text("GAME OVER",200,200)
  
//}
//}
    

    
}
 


function draw() {
  background(0,255,230);
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particle.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particle.length; j++) {
   
     particle[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   mousePressed();
}


function mousePressed(){
  if(Gamestate!=="end"){
turn= turn+ 1
particle= new Particle(mouseX,10,10,10);
  }
}