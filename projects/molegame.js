alert("Welcome to Wack A Mole");
var name = prompt("What is your name");
alert("Good Luck " + name);

var moleimg = document.createElement("img"); //in creatingElement pass it the type of element to create
moleimg.src = "../imgs/moleimage.jpg";
moleimg.style.position = "absolute";
document.body.appendChild(moleimg);
var playbat = document.createElement("img");
playbat.src = "../imgs/hammer.png";
document.body.style.cursor = "url(../imgs/hammer.png),auto";
function posmole (){
	var width = document.body.clientWidth;
	var height = document.body.clientHeight;
	var posx = Math.floor(Math.random() * (width + 1));
	var posy = Math.floor(Math.random() * (height + 1));
	moleimg.style.top = posy + "px";
	moleimg.style.left = posx + "px";
}
posmole();
function timer(){
    moleimg.style.visibility = "hidden"; 
    endTimer = setTimeout(show,1000);
	}

var endTimer = setTimeout(timer,3000);
function show() {
	moleimg.style.visibility = "visible";
	posmole();
	endTimer = setTimeout(timer,3000);
}
var player = {
	hits : 0,
};
var mole = {
	lives : 3,
};

moleimg.onclick = function(){
	player.hits += 1;
	mole.lives -= 1;
 	alert("You hit a mole, only " + mole.lives + " to go!");
 	if (player.hits == 3){
 		alert("You won the game");
 		clearTimeout(endTimer);
 		var again = prompt("Would you like to play again, Enter yes to do so");
 			if (again == "yes"){
 				timer();
 				player.hits = 0;
 				mole.lives = 3;
 			};	
 	};
}

