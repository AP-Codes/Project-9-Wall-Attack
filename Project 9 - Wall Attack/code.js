var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var player = createSprite(100, 200, 20, 20);
  player.shapeColor="red";

var enemy1 = createSprite(375, 25, 50, 50);
  enemy1.shapeColor="yellow";

var enemy2 = createSprite(375, 75, 50, 50);
  enemy2.shapeColor="yellow";
  
var enemy3 = createSprite(375, 125, 50, 50);
  enemy3.shapeColor="yellow";
  
var enemy4 = createSprite(375, 175, 50, 50);
  enemy4.shapeColor="yellow";
  
var enemy5 = createSprite(375, 225, 50, 50);
  enemy5.shapeColor="yellow";
  
var enemy6 = createSprite(375, 275, 50, 50);
  enemy6.shapeColor="yellow";
  
var enemy7 = createSprite(375, 325, 50, 50);
  enemy7.shapeColor="yellow";
  
var enemy8 = createSprite(375, 375, 50, 50);
  enemy8.shapeColor="yellow";
  
var gameState = "1";

var playerScore = 0;

var playerScore = 0;

var compScore = 0;


function draw() {
  background("grey");
  createEdgeSprites();
  
  
  playerMovement();

  enemyState();

  displayScore();
  
  updateScore();
  
  drawSprites();
}

function displayScore(){
  textSize(15);
 fill("Maroon");
  text("Your score:0" + playerScore, 5, 20);
  text("Enemies:0" + compScore,5, 40);
  
  if(gameState=="9"){
  
  if(playerScore>compScore){
      text("You Win!", 75, 200);
      //playSound("assets/category_achievements/sharp_win_3.mp3",false);
    }
  if(playerScore<compScore){
      //playSound("assets/category_alerts/vibrant_game_negative_bling_1.mp3", false);
      text("You Lose!", 75, 200);
    }
  }
}

function enemyState(){
  if(gameState=="1"){
 textSize(18); 
 fill ("maroon"); 
 text ("Press Space to Start", 20,175) ; 
 
if (keyDown("space")) {
enemy1.setVelocity(-5, 0);
}
if(enemy1.x=="i">0){
  gameState="2";
  enemy1.destroy;
  playSound("assets/category_collect/collect_item_bling_4.mp3");
  compScore=compScore+1;
}
}

if(gameState=="2"){
  enemy4.setVelocity(-5, 0);
  
  if(enemy4.x=="i">0){
  gameState="3";
  enemy4.destroy;
  playSound("assets/category_collect/collect_item_bling_4.mp3");
  compScore=compScore+1;
}
}
if(gameState=="3")
{
  enemy8.setVelocity(-5, 0);
  
  if(enemy8.x=="i">0){
  gameState="4";
  enemy8.destroy;
  playSound("assets/category_collect/collect_item_bling_4.mp3");
  compScore=compScore+1;
}
}

if(gameState=="4")
{
  enemy5.setVelocity(-5, 0);
  
  if(enemy5.x=="i">0){
  gameState="5";
  enemy5.destroy;
  playSound("assets/category_collect/collect_item_bling_4.mp3");
  compScore=compScore+1;
}
}

if(gameState=="5")
{
  enemy2.setVelocity(-5, 0);
  
  if(enemy2.x=="i">0){
  gameState="6";
  enemy2.destroy;
  playSound("assets/category_collect/collect_item_bling_4.mp3");
  compScore=compScore+1;
}
}

if(gameState=="6")
{
  enemy7.setVelocity(-5, 0);
  
  if(enemy7.x=="i">0){
  gameState="7";
  enemy7.destroy;
  playSound("assets/category_collect/collect_item_bling_4.mp3");
  compScore=compScore+1;
}
}

if(gameState=="7")
{
  enemy3.setVelocity(-5, 0);
  
  if(enemy3.x=="i">0){
  gameState="8";
  enemy3.destroy;
  playSound("assets/category_collect/collect_item_bling_4.mp3");
  compScore=compScore+1;
}
}
if(gameState=="8"){
  enemy6.setVelocity(-5, 0);
  
  if(enemy6.x=="i">0){
  gameState="9";
  enemy6.destroy;
  playSound("assets/category_collect/collect_item_bling_4.mp3");
  compScore=compScore+1;
}

}
}

function playerMovement(){
  player.collide(edges);
  
  if(keyDown("w")||keyDown("UP_ARROW")){
  player.y=player.y-3;
}
if(keyDown("s")||keyDown("DOWN_ARROW")){
  player.y=player.y+3;
}
}

function updateScore(){
  
if(player.isTouching(enemy1)){
  gameState="2";
  enemy1.destroy();
  playSound("assets/category_swish/double_sword_swish.mp3");
  playerScore=playerScore+1;
}
if(player.isTouching(enemy4)){
  gameState="3";
  enemy4.destroy();
  playSound("assets/category_swish/double_sword_swish.mp3");
  playerScore=playerScore+1;
}
if(player.isTouching(enemy8)){
  gameState="4";
  enemy8.destroy();
  playSound("assets/category_swish/double_sword_swish.mp3");
  playerScore=playerScore+1;
}
if(player.isTouching(enemy5)){
  gameState="5";
  enemy5.destroy();
  playSound("assets/category_swish/double_sword_swish.mp3");
  playerScore=playerScore+1;
}
if(player.isTouching(enemy2)){
  gameState="6";
  enemy2.destroy();
  playSound("assets/category_swish/double_sword_swish.mp3");
  playerScore=playerScore+1;
}
if(player.isTouching(enemy7)){
  gameState="7";
  enemy7.destroy();
  playSound("assets/category_swish/double_sword_swish.mp3");
  playerScore=playerScore+1;
}
if(player.isTouching(enemy3)){
  gameState="8";
  enemy3.destroy();
  playSound("assets/category_swish/double_sword_swish.mp3");
  playerScore=playerScore+1;
}
if(player.isTouching(enemy6)){
  gameState="9";
  enemy6.destroy();
  playSound("assets/category_swish/double_sword_swish.mp3");
  playerScore=playerScore+1;
}
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
