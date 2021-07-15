//Create variables here
var dog,dogImg2,daogImg1,foodStock,foodS,database,happydogImg

function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg1.png")
  happydogImg=loadImage("images/dogImg2.png")
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database()
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)
  textSize(20)

  dog=createSprite(250,350,10,60)
  dog.addImage(dogImg)
  dog.scale=0.2
}


function draw() {  
background("green")


if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happydogImg)
}

drawSprites();
textSize(20);
fill(255)
text("note: press up arrow to feed drago milk",50,80)
text("food Remaning :"+foodS,150,150)


}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref("/").update({
    Food:x
  })
}
function readStock(data){
  foodS=data.val();
}

