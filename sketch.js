var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	ground2Sprite=createSprite(width, height/2, 10,height);
	ground2Sprite.shapeColor=color(255)
	ground3Sprite=createSprite(0, height/2, 10, height);
	ground3Sprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Crea el Suelo
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 ground2 = Bodies.rectangle(0, height/2, 10, height , {isStatic:true} );
 	World.add(world, ground2);
	 ground3 = Bodies.rectangle(width, height/2, 10,height, {isStatic:true} );
 	World.add(world, ground3);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 console.log(packageBody.position.x)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if (keyCode === LEFT_ARROW || packageSprite.y > 200){
	  helicopterSprite.x=helicopterSprite.x-5;
	  Matter.Body.translate(packageBody,{x:-5,y:0});
  }

  if (keyCode === RIGHT_ARROW || packageSprite.y > 200){
	helicopterSprite.x=helicopterSprite.x+5;
	Matter.Body.translate(packageBody,{x:+5,y:0});
}

if (keyCode === DOWN_ARROW || packageSprite.y > 400){
	Matter.Body.translate(packageBody,{x:0,y:0});
	Matter.Body.setStatic(packageBody,false);
}
  drawSprites();
  
  
 
}
