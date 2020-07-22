var player;
var obs1, obs2, obs3;
var bg
var playerimg
var rand 


function preload() {
  playerimg = loadImage("drop.jpg"); 
  bacimg = loadImage("bac2.jpg");
  chemimg = loadImage("chem.jpg");
  sewimg = loadImage("sewage.png");
  bgimg = loadImage("water stream.png");
}
function setup() {
  createCanvas(800,400);
  bg = createSprite(400,200,800,400);
  bg.addImage("bgimg", bgimg);
  player = createSprite(400, 200, 50, 50);
  player.addImage("playerimg", playerimg);
  player.scale = 0.20;
  obs1 = createSprite(400,0,50,50);
  obs1.addImage("obs1img",bacimg);
  obs1.scale = 0.10;
  obs1.visible = false;
  obs2 = createSprite(250,0,50,50);
  obs2.addImage("obs2img",chemimg);
  obs2.scale = 0.07;
  obs2.visible = false;
  obs3 = createSprite(600,0,50,50);
  obs3.addImage("obs3img",sewimg);
  obs3.scale = 0.05;
  obs3.visible = false;
  
 

}


function draw() {
  rand = random(1,3);

  background(bgimg);  
  drawSprites();
  obs1picked();
  obs2picked();
  obs3picked();
  
  bg.velocityY = 1;
  if(bg.y > 290){
    bg.y = 210;
  }
  if(keyDown(UP_ARROW)){
    console.log("working");
    player.velocityY = -5;
  }
  if(keyWentUp(UP_ARROW)){
    console.log("working");
    player.velocityY = 0;
  }
  if(keyDown(DOWN_ARROW)){
    console.log("working");
    player.velocityY = 5;
  }
  if(keyWentUp(DOWN_ARROW)){
    console.log("working");
    player.velocityY = 0;
  }
  if(keyDown(RIGHT_ARROW)){
    console.log("working");
    player.velocityX = 5;
  }
  if(keyWentUp(RIGHT_ARROW)){
    console.log("working");
    player.velocityX = 0;
  }
  if(keyDown(LEFT_ARROW)){
    console.log("working");
    player.velocityX = -5;
  }
  if(keyWentUp(LEFT_ARROW)){
    console.log("working");
    player.velocityX = 0;
  }
  if(player.x >= 800){
    player.velocityX = -5;
  }
  if(player.x <= 0){
    player.velocityX = 5;
  } 
  if(player.y >= 400){
    player.velocityY = -5
  } 
  if(player.y <= 0){
    player.velocityY = 5
  }
  
}
function obs1picked(){
  if(rand == 1){
    obs1.visible = true;
  }
}
function obs2picked(){
  if(rand == 2){
    obs2.visible = true;
  }
}
function obs3picked(){
  if(rand == 3){
    obs3.visible = true;
  }
}