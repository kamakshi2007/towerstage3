const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingShot;
var score ;
var backgroundImage

function preload() {
    
    loadBackGround();
    
    
}

function setup(){
    createCanvas(1300,500);
    engine = Engine.create();
    world = engine.world;

    //block = (color(random(100,200),random(100,200),random(100,200)))
    //blok =  (color(random(100,200),random(100,200),random(100,200)))

    block1 = new Block(330+90,235+70,30,40);
    block2 = new Block(360+90,235+70,30,40);
    block3 = new Block(390+90,235+70,30,40);
    block4 = new Block(420+90,235+70,30,40);
    block5 = new Block(450+90,235+70,30,40);
    block6 = new Block(360+90,195+70,30,40);
    block7 = new Block(390+90,195+70,30,40);
    block8 = new Block(420+90,195+70,30,40);
    block9 = new Block(390+90,155+70,30,40);

    blok1 = new Block(690,100+50,30,40);
    blok2 = new Block(720,100+50,30,40);
    blok3 = new Block(750,100+50,30,40);
    blok4 = new Block(780,100+50,30,40);
    blok5 = new Block(810,100+50,30,40);
    blok6 = new Block(720,60+50,30,40);
    blok7 = new Block(750,60+50,30,40);
    blok8 = new Block(780,60+50,30,40);
    blok9 = new Block(750,20+50,30,40);
    
    stone = new Stone(50,200);
    
    score = 0;

    slingshot = new SlingShot(stone.body,{x:150, y:110});

    ground = new Ground(620,height,1500,20);
    ground1 = new Ground(480,350,200,5);
    ground2 = new Ground(750,200,200,5);

    bg = (color(random(50,100),random(50,100),random(50,100)))

}

function draw(){
   // background("pink");
    if(backgroundImage){
        background(backgroundImage);
    }else{
        background(bg);
    }
    //background(color(random(0,100),random(0,100),random(0,100)));
    push();
    stroke("black");
    strokeWeight(5);
    textSize(30);
    fill(bg);
    text("drag the polygon with mouse and hit the blocks",50,30);
    text("press 'SPACE' to get second chance",50,70);

    pop();

    push();
    stroke("black");
    strokeWeight(5);
    textSize(30);
    fill("white");
    text("Score = "+ score,1000,100);
    pop();
    
    Engine.update(engine);
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
   
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();

    blok1.display();
    blok2.display();
    blok3.display();
    blok4.display();
    blok5.display();
    blok6.display();
    blok7.display();
    blok8.display();
    blok9.display();

    blok1.score();
    blok2.score();
    blok3.score();
    blok4.score();
    blok5.score();
    blok6.score();
    blok7.score();
    blok8.score();
    blok9.score();
    
    ground.display();
    ground1.display();
    ground2.display();

    stone.display();

    slingshot.display();

    

}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed()  {
    if(keyCode===32)  {
        Matter.Body.setPosition(stone.body, { x: 120, y: 200 });
        slingshot.attach(stone.body);
    }
   }
async function loadBackGround(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json()
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
   // console.log(hour);

   if(hour>=06 && hour<=19){
    bg = "day.jpg"
   }else{
      bg = "nt.jpg" 
   }
   backgroundImage  = loadImage(bg);
}
  