
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200)
  Monkey=createSprite(70,100,10,20)
  Monkey.addAnimation("m",monkey_running)
  Monkey.scale=0.25
  Ground=createSprite(300,180,600,10)
  
}


function draw() {
  background("Green")
  if(keyDown("Space")
     
    ){
    Monkey.velocityY=-6
  }Monkey.velocityY+=0.5
  Monkey.collide(Ground)
drawSprites();
  spawnBanana();
  
}
function spawnBanana(){
  
  if(frameCount%40===0){
    Banana=createSprite(580,random(50,120),20,20)
  Banana.velocityX=-3
    Banana.addImage("b",bananaImage)
    Banana.scale=0.2
  }
}





