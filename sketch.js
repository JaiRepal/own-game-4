var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, obsTop1, obsTop2
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3
var gameOver, gameOverImg
var restart, restartImg

var score = 0;

//game states      
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

obsTop1 = loadImage("assets/obsTop1.png")
obsTop2 = loadImage("assets/obsTop2.png")

obsBottom1 = loadImage("assets/obsBottom1.png")
obsBottom2 = loadImage("assets/obsBottom2.png")
obsBottom3 = loadImage("assets/obsBottom3.png")

gameOverImg= loadImage("assets/gameOver.png")
restartImg = loadImage("assets/restart.png")

}

function setup(){

  createCanvas(400,400)
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3


//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;
balloon.debug = false;

//initialising groups
topObstaclesGroup = new Group();
bottomObstaclesGroup = new Group();
barGroup = new Group();

//creating game over and restart sprites
gameOver = createSprite(220,200);
restart = createSprite(220,240);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.5;
restart.addImage(restartImg);
restart.scale = 0.5;
gameOver.visible = false;
restart.visible = false;
}

function draw() {
  
  background("black");

  

  if(gameState === PLAY){
    if (keyDown("SPACE")){
      balloon.velocityY=-8
    }
    balloon.velocityY+=0.9
    spawnObstaclesTop()
    spawnObstaclesBottom()
    if (topObstaclesGroup.isTouching(balloon)||bottomObstaclesGroup.isTouching(balloon)){
      gameState=END
    }
  }

  if(gameState === END) 
    {
         gameOver.visible=true
         restart.visible=true
         balloon.setVelocity(0,0)
         topObstaclesGroup.setVelocityXEach(0)
         bottomObstaclesGroup.setVelocityXEach(0)
         topObstaclesGroup.setLifetimeEach(-1)
         bottomObstaclesGroup.setLifetimeEach(-1)

    } 

    drawSprites();
    Score();     
}

function reset()
{
  
}


function spawnObstaclesTop() 
{
  if (frameCount%80===0){
    obstop=createSprite(400,50,20,20)
    //obstop.addImage(obsTop1)
    obstop.scale=0.1
    obstop.velocityX=-3
    obstop.y=Math.round(random(10,100))
    var rand=Math.round(random(1,2))
    switch(rand){
      case 1:obstop.addImage(obsTop1)
      break
      case 2:obstop.addImage(obsTop2)
      break
      default:break

    }
    obstop.lifetime=200
    balloon.depth+=1
    topObstaclesGroup.add(obstop)
  }
}

function spawnObstaclesBottom() 
{
      if (frameCount%70===0){
        obsbot=createSprite(400,350,20,20)
        obsbot.scale=0.07
        obsbot.velocityX=-3
        //obsbot.y=Math.round(random(300,350))
        var rand=Math.round(random(1,3))
        switch(rand){
          case 1:obsbot.addImage(obsBottom1)
          break
          case 2:obsbot.addImage(obsBottom2)
          break
          case 3:obsbot.addImage(obsBottom3)
          break
          default:break
        }
        obsbot.lifetime=200
        bottomObstaclesGroup.add(obsbot)
      }
}

 function Bar() 
 {
        
}

function Score()
{
         
       
  
}

  
