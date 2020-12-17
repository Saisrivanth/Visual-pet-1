//Create variables here
var dog , food,x;
var database,foodstock;
function preload()
{
  //load images here
  hungrydog = loadImage("images/dogImg.png");
  happydog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(800, 700);
  dog = createSprite(400,350,10,10)
 dog.addImage(hungrydog)
 dog.scale = 0.2
  foodstock = database.ref('Food')
  foodstock.on("value",readStock);
}


function draw() {  
 background("green")
 if(keyWentDown(UP_ARROW) && x != 0)
 {
   writeStock(food);
   dog.addImage(happydog);
 }
 if(keyWentUp(UP_ARROW))
 {
   writeStock(food);
   dog.addImage(hungrydog);
 }
  drawSprites();
  //add styles here
  
}

function readStock(data)
{
  food = data.val();
}

function writeStock(x)
{
  if(x<=0){
    x = 0
  }else{
    x = x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

