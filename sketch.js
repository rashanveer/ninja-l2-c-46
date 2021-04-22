var backGround1,backGround2,ninja ,ninjaImage,invisibleGround,enemy,enemyImage,chest ,heart1,heart1Image,gameState = 0,gameOverFlag = 0 ;
var greeting,greetingImage,emoji1,emoji2,emojiImage,emoji3,emoji4,emojiImage2,emojiImage3,chest,chestImage,enemyRunning,enemyAttacking,playerdiedImage;
var playerAttackImage,enemyDiedImage,ninja1,enemy1,logImage,axeImage,fireImage,fire1,fire2,fire3,fireBallCount = 0,fireBallFlag = 0,fireBall;
var heart2,heart2Image,axeGroup
function preload() {
backGround1 = loadImage("Images/Bg1.gif")
backGround2 = loadImage("Images/Bg2.gif")
ninjaImage = loadImage("Images/PlayerStanding.png")
enemyImage = loadImage("Images/EnemyStanding.png")
heart1Image = loadImage("Images/HeartL1.png")
heart2Image = loadImage("Images/HeartL2.png")
greetingImage = loadImage("Images/greeting.png")
emojiImage = loadImage("Images/crying.png")
emoji2Image = loadImage("Images/cele.png")
emoji3Image = loadImage("Images/celebration image.png")
chestImage = loadImage("Images/chest.png")
enemyRunning = loadImage("Images/EnemyRunning.png")
enemyAttacking = loadImage("Images/EnemyAttacked3.png")
playerdiedImage = loadImage("Images/PlayerDied.png")
playerAttackImage = loadImage("Images/PlayerAttack.png")
enemyDiedImage = loadImage("Images/EnemyDied.png")
logImage = loadImage("Images/log.png")
axeImage = loadImage("Images/axe.png")
fireImage = loadImage("Images/fire.png")
ninja1AttackImage = loadImage("Images/fireAttack.png")
}
function setup() {
  createCanvas(600, 400);
  ninja = createSprite(20,320,10,10)
  ninja.scale = 0.5
  ninja.addImage(ninjaImage)
  ninja.debug = true

  fireBall = createSprite(0,0,10,10)

axeGroup = new Group()
  

  enemy = createSprite(475,320,10,10)
enemy.addImage(enemyImage)
enemy.scale = 0.8
enemy.debug = true

ninja1 = createSprite(20,320,10,10)
ninja1.addImage(ninjaImage)
ninja1.scale = 0.5
ninja1.visible = false
enemy1 = createSprite(475,320,10,10)
enemy1.addImage(enemyImage)
enemy1.scale = 0.8
enemy1.visible = false

  
heart1 = createSprite (570,300,10,10)
heart1.scale = 0.05
heart1.addImage(heart1Image)

heart2 = createSprite (570,300,10,10)
heart2.scale = 0.05
heart2.addImage(heart2Image)
heart2.visible = false

greeting = createSprite(300,80,10,10)
greeting.addImage(greetingImage)
greeting.scale= 0.2

emoji1 = createSprite(50,150,10,10)
emoji1.addImage(emojiImage)
emoji1.scale=0.05


emoji2 = createSprite(550,150,10,10)
emoji2.addImage(emojiImage)
emoji2.scale=0.05


emoji3 = createSprite(550,300,10,10)
emoji3.addImage(emoji3Image)
emoji3.scale=0.1

emoji4 = createSprite(50,300,10,10)
emoji4.addImage(emoji2Image)
emoji4.scale=0.2

chest = createSprite(570,325,10,10)
chest.addImage(chestImage)
chest.scale = 0.04
chest.depth = heart1.depth
heart1.depth = heart1.depth +1

fire1 = createSprite(300,150,10,10)
fire1.addImage(fireImage)
fire1.scale = 0.1
fire1.visible = true

fire2 = createSprite(150,100,10,10)
fire2.addImage(fireImage)
fire2.scale = 0.1
fire2.visible = true

fire3 = createSprite(450,100,10,10)
fire3.addImage(fireImage)
fire3.scale = 0.1
fire3.visible = true


  invisibleGround = createSprite(300,355,600,10)
  invisibleGround.visible = false;
}
function draw() {
  if(keyDown("space")){
    ninja.velocityY = -6
  }
  
  if(keyDown(RIGHT_ARROW)&& gameOverFlag===0){
    ninja.x = ninja.x+2
  }
  if(keyDown(LEFT_ARROW)&& gameOverFlag===0){
    ninja.x = ninja.x - 2

  }
  ninja.velocityY = ninja.velocityY +0.8
  ninja.collide(invisibleGround)

  if(gameState===0){
    background("black")
    fire1.visible = false
    ninja.visible = false
    enemy.visible = false
    heart1.visible = false
    emoji1.visible = false
    emoji2.visible = false
    emoji3.visible = false
    emoji4.visible = false
    chest.visible = false
    fill("White")
    textSize(15)
    text(" GAMERZ TO THE DANGEROUS NINJA GAME",125,160)
    text("PLEASE PRESS S TO START THE GAME",135,240)
    text("USE RIGHT AND LEFT ARROW KEY TO MOVE THE NINJA",90,320)
    text("TO MAKE THE NINJA JUMP YOU HAVE TO USE SPACEBAR KEY",75,390)
    gameOverFlag = 0
    if(keyDown("S")){
      gameState = 1
    }
  }
  if(gameState===1){
    background(backGround1);
    fire1.visible = false
    ninja.visible = true
    enemy.visible = true
    heart1.visible = true
    chest.visible = true
    greeting.visible = false
    emoji1.visible = false
    emoji2.visible = false
    emoji3.visible = false
    emoji4.visible = false
    if(enemy.x - ninja.x<400){
      enemy.velocityX = -9
      enemy.addImage(enemyRunning)
    }
   
    if(ninja.isTouching(enemy)){
      enemy.addImage(enemyAttacking)
      ninja.addImage(playerdiedImage)
      enemy.velocityX = 0
      gameOverFlag = 1
    }
  
    if(gameOverFlag===1){
      fire1.visible = false
      emoji1.visible = true
      emoji2.visible = true
      ninja.visible = true
      chest.visible = false
    enemy.visible = true
    heart1.visible = false
    emoji3.visible = false
    emoji4.visible = false
      background("red")
      fill("black")
      textSize(25)
      text("Sorry! Bull has attacked ninja, You Lose",100,50)
      text("Press R to restart",200,150)
    }
  }
    if(keyDown("R")&& gameOverFlag===1){
      greeting.visible = true
      gameState = 0
      gamerOverFlag = 0
    }
    if(ninja.isTouching(chest)){
      gameState = 2
    }
  
 if(gameState===2){
  fire1.visible = false
  emoji1.visible = false
  emoji2.visible = false
  emoji3.visible = true
  emoji4.visible = true
  chest.visible = false
  ninja.visible = false
  enemy.visible = false
   background("Lightgreen")
   textSize(12)
   fill("blue")
   text("YAAAY! YOU HAVE FOUND ONE PEICE OF HEART. THERE,STILL 2 PEICES ARE  LEFT",50,200)
   text("PLEASE PRESS N TO START THE NEXT LEVEL",250,300)
   if(keyDown("N")){
     ninja.destroy()
     enemy.destroy()
     gameState = 3
   }
 }
 if(gameState===3){
   background(backGround2)
   heart1.destroy();
   heart2.visible = true
   var plank1 = createSprite(100,280,80,10)
   ninja1.collide(plank1)
  // plank1.addImage(logImage)
 //  plank1.scale = 0.01

   var plank2 = createSprite(150,200,80,10)
   ninja1.collide(plank2)
 //  plank2.addImage(logImage)
 //  plank2.scale = 0.01

   var plank3 = createSprite(200,120,80,10)
   ninja1.collide(plank3)
 //  plank3.addImage(logImage)
 //  plank3.scale = 0.01

   var plank4 = createSprite(250,40,80,10)
   ninja1.collide(plank4)
 //  plank4.addImage(logImage)
 //  plank4.scale = 0.01
   
   ninja1.visible = true
   enemy1.visible = true
   emoji1.visible = false
   emoji2.visible = false
   emoji3.visible = false
   emoji4.visible = false
   chest.visible = true
   fire1.visible = true
   if(keyDown("space")){
    ninja1.velocityY = -6
  }

  
  if(keyDown(RIGHT_ARROW)&& gameOverFlag===0){
    ninja1.x = ninja1.x+2
  }
  if(keyDown(LEFT_ARROW)&& gameOverFlag===0){
    ninja1.x = ninja1.x-2
  }
  ninja1.velocityY = ninja1.velocityY +0.8
  ninja1.collide(invisibleGround)
  if(ninja1.isTouching(fire1)){
    fireBallCount++
    fire1.destroy()
  }
  if(ninja1.isTouching(fire2)){
    fireBallCount++
    fire2.destroy()
  }
  if(ninja1.isTouching(fire3)){
    fireBallCount++
    fire3.destroy()
  }
  if(fireBallCount===3){
    if(keyDown("A")&&fireBallFlag===0){
      fireBallAttack();
      fireBallFlag=1
    }
    if(fireBall.x>490){
      fireBallFlag = 0
    }
  }
if(fireBall.isTouching(enemy1)){
  enemy1.destroy();
  fireBall.destroy();
}
if(ninja1.isTouching(axeGroup)){
  enemy1.addImage(enemyAttacking)
  ninja1.addImage(playerdiedImage)
  axeGroup.destroyEach()
  gameOverFlag = 1
}

if(ninja1.isTouching(enemy1)){
  enemy1.addImage(enemyAttacking)
  ninja1.addImage(playerdiedImage)
  enemy1.velocityX = 0
  gameOverFlag = 1
}


if(gameOverFlag===1){
  fire1.visible = false
  emoji1.visible = true
  emoji2.visible = true
  ninja1.visible = true
  chest.visible = false
enemy1.visible = true
heart1.visible = false
emoji3.visible = false
emoji4.visible = false
  background("red")
  fill("black")
  textSize(25)
  text("Sorry! Bull has attacked ninja, You Lose",100,50)
  text("Press R to restart",200,150)
}

if(keyDown("R")&& gameOverFlag===1){
  greeting.visible = true
  gameState = 0
  gamerOverFlag = 0
}
if(ninja1.isTouching(chest)){
  background("black")
}
axeAttack();
 }

 

 
  drawSprites();
}
function axeAttack(){
  if(frameCount % 80===0){
  var axe = createSprite(440,310,20,20)
  axe.velocityX = -6
  axe.lifetime=100
  axe.addImage(axeImage)
  axeGroup.add(axe)
 
  }

}
function  fireBallAttack(){

     fireBall = createSprite(ninja1.x,ninja1.y,10,10)
    fireBall.velocityX = 6
    fireBall.lifetime = 150
  
}

 
