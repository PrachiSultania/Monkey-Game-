var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var score = 0;
var survivalTime = 0;
var bgImage;

function preload() {
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  bgImage = loadImage("download.jpg")

}



function setup() {
  createCanvas(600, 430);

  ground = createSprite(width / 2, height - 20, 1200, 10);
  ground.velocityX = -4;
  console.log(ground.x);

  monkey = createSprite(80, 200, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background(bgImage);
  drawSprites();

  if (keyDown("space") && monkey.y >= 200) {
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.8;

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }


  stroke("black");
  textSize(20);
  fill("black");
  text("Score: " + score, 10, 50);

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate());
  text("Survival Time: " + survivalTime, 200, 50);

  monkey.collide(ground)


}