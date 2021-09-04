var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg
var leaves,leavesImg
var orange, orangeImg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg= loadImage("apple.png")
  leavesImg= loadImage("leaf.png")
  orangeImg= loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  if(keyDown("space")&&rabbit.y>=100){
    rabbit.velocityY=-13
    }
  rabbit.x= World.mouseX
  
  
  rabbit.velocityY=rabbit.velocityY+0.8
  spawnapples()
  spawnleaves()
  spawnorangeleaves()
  drawSprites();
}
function spawnapples(){
if(frameCount % 60===0){
apple= createSprite(60,60,50,25)
apple.y= Math.round(random(10,60))
apple.x= Math.round(random(200,90))
apple.addImage(appleImg)
apple.scale=0.05
apple.velocityY=3
apple.depth= rabbit.depth
rabbit.depth= rabbit.depth+1
apple.lifetime= 120
}

}
function spawnleaves(){
if(frameCount % 100===0){
leaves= createSprite(60,60,50,25)
leaves.y= Math.round(random(10,60))
leaves.x= Math.round(random(320,60))
leaves.addImage(leavesImg)
leaves.scale= 0.03
leaves.velocityY=2
leaves.lifetime=120
}
}
function spawnorangeleaves(){
if(frameCount % 150===0){
orange = createSprite(60,60,50,25)
orange.y= Math.round(random(10,60))
orange.x= Math.round(random(300,60))
orange.addImage(orangeImg)
orange.scale= 0.04
orange.velocityY= 1
orange.lifetime=120
}
}
