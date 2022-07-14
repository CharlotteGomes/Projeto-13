var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var orangeL, orangeImg;
var redL, redImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

var rand =  Math.round(random(1,100))
console.log(rand)



}


function draw() {
  background(0);

  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
 

  drawSprites();
  createApples();
  createOrange();
  createRed();
}

function createApples() {
  if(frameCount % 80 == 20){
  apple = createSprite (random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY = 3;
  apple.lifeTime = 150;
  }

  }

function createOrange() {
  if(frameCount % 80 == 50){
  orangeL = createSprite (random(50,350),40,10,10);
  orangeL.addImage(orangeImg);
  orangeL.scale=0.07;
  orangeL.velocityY = 3;
  orangeL.lifeTime = 150;
  }

  }

  function createRed() {
    if(frameCount % 80 == 79){
    redL = createSprite (random(50,350),40,10,10);
    redL.addImage(redImg);
    redL.scale=0.07;
    redL.velocityY = 3;
    redL.lifeTime = 150;
    }
    
    }
    
