var field = document.createElement("field");
var context = field.getContext("2d");
field.width = 512;
field.height = 480;
document.body.appendChild(field);

var backRead = false;
var backgroundImg = new Image();
background.onload = function (){
	backRead = true;
};
backgroundImg.src = "imgs/backgroundImg.png";

var heroRead = false;
var heroImg = new Image();
background.onload = function (){
	heroRead = true;
};
heroImg.src = "imgs/heroImg.png";

var monsterRead = false;
var monsterImg = new Image();
background.onload = function (){
	monsterRead = true;
};
monsterImg.src = "imgs/monsterImg.png";

var hero ={
	speed: 256;
	x: 0;
	y: 0;
};
var monster ={
	x:0;
	y:0;
};
var monstersCaught = 0;

var keysDown ={};
addEventListener("keydown", function(e)){
	keysDown[e.keyCode] = true;
}, false);
addEventListener("keyup", function(e)){
	delete keysDown[e.keyCode];
}, false);
