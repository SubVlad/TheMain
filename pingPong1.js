const player1 = {
	node: document.querySelector("#player1"),
	y: 1,
	speed: 0,
	score: 0,
	axel: 0,
	dash: false,
	dash_power: 0,
}
const player2 = {
	node: document.querySelector("#player2"),
	y: 1,
	speed: 0,
	score: 0,
	axel: 0,
	dash: false,
	dash_power: 0,
}
const ball = {
	node: document.querySelector("#ball"),
	x: 0,
	y: 0,
	xspeed: 0,
	yspeed: 0,
	speed: 0,
	boost: 0,
}
let W = document.activeElement.clientWidth;
let H = document.activeElement.clientHeight;
ball.speed = 3;
player1.y = H/2 - 100;
player2.y = H/2 - 100;
ball.x = W/2 - 25;
ball.y = H/2 - 20;

const stStart = document.getElementById("stStart");
stStart.addEventListener("click", startgame);
stStart.style.left = W/2 - 79 + "px";

const title = document.getElementById("title");
player1.score = 0;
player2.score = 0;

document.addEventListener("DOMContentLoaded", initGame)
function initGame() {
	ball.node.style.left = String(ball.x) + "px";
	ball.node.style.top = String(ball.y) + "px";

	player1.node.style.top = String(player1.y) + "px";
	player2.node.style.left = W - 24 + "px";
	player2.node.style.top = String(player2.y) + "px"
}
setInterval(() => render(), 15);
addEventListener("keydown", changeSpeed);
addEventListener("keyup", zerospeed);

function changeSpeed(e) {
	switch(e.key) {
		case "o": player2.speed=-10; player2.axel|=1; if (player2.dash) {player2.dash_power+=2}; break;
		case "l": player2.speed= 10; player2.axel|=2; if (player2.dash) {player2.dash_power+=2}; break;
		case "w": player1.speed=-10; player1.axel|=1; if (player1.dash) {player1.dash_power+=2}; break;
		case "s": player1.speed= 10; player1.axel|=2; if (player1.dash) {player1.dash_power+=2}; break;
	}
}

function zerospeed(e) {
	switch(e.key) {
		case"o": player2.axel^=1; player2.dash=true; setTimeout(() => player2.dash=false, 200); break;
		case"l": player2.axel^=2; player2.dash=true; setTimeout(() => player2.dash=false, 200); break;
		case"w": player1.axel^=1; player1.dash=true; setTimeout(() => player1.dash=false, 200); break;
		case"s": player1.axel^=2; player1.dash=true; setTimeout(() => player1.dash=false, 200); break;
	}
}
function render() {
	player1.dash_power=Math.min(Math.max(player1.dash_power-0.05, 0), 4);
	if (player1.axel==0) player1.speed-=Math.sign(player1.speed);
	player1.y =
		Math.min(Math.max(player1.y 
		+player1.speed*(player1.dash_power+1), 0), H-200);
	player1.node.style.top = String(player1.y) + "px";

	player2.dash_power=Math.min(Math.max(player2.dash_power-0.05, 0), 4);
	if (player2.axel==0) player2.speed-=Math.sign(player2.speed);
	player2.y = 
		Math.min(Math.max(player2.y 
		+player2.speed*(player2.dash_power+1), 0), H-200);
	player2.node.style.top = String(player2.y) + "px";

	ball.x += ball.speed * ball.xspeed * (ball.boost + 1); 
	ball.node.style.left = String(ball.x) + "px";
	ball.y += ball.speed * ball.yspeed * (ball.boost + 1);
	ball.node.style.top = String(ball.y) + "px";
	if (ball.x < 0) { 
		ball.x = W/2-25;
		ball.y = H/2-20;
		player2.score = player2.score + 1;
		title.textContent = `${player1.score} : ${player2.score}`;
		ball.boost=0;
		ball.xspeed = Math.round(Math.random());
		ball.yspeed = Math.round(Math.random());
		if (ball.xspeed == 0) { ball.xspeed = -1};
		if (ball.yspeed == 0) { ball.yspeed = -1};	
	}
	if (ball.x > W - 45) { 
		ball.x = W/2-25;
		ball.y = H/2-20;
		player1.score = player1.score + 1;
		title.textContent = `${player1.score} : ${player2.score}`;
		ball.boost=0;
		ball.xspeed = Math.round(Math.random());
		ball.yspeed = Math.round(Math.random());
		if (ball.xspeed == 0) { ball.xspeed = -1};
		if (ball.yspeed == 0) { ball.yspeed = -1};	
	} // ниже - коллизия мяча с игроками
	if (ball.x<=20 && player1.y < ball.y && ball.y < player1.y + 200) {
		ball.xspeed = Math.abs(ball.xspeed);
		if (Math.sign(player1.speed) == Math.sign(ball.yspeed)) {
			ball.boost < 19 && ball.boost++;
		} 	
		if (Math.sign(player1.speed) !== Math.sign(ball.yspeed)) {
			if (ball.boost > 1) {ball.boost--} else ball.yspeed *= -1;
		}
	} else if (ball.x >= W-60 && player2.y < ball.y && ball.y < player2.y + 200) {
		ball.xspeed = -Math.abs(ball.xspeed);
		if (Math.sign(player2.speed) == Math.sign(ball.yspeed)) {
			ball.boost < 19 && ball.boost++;
		} 
		if (Math.sign(player2.speed) !== Math.sign(ball.yspeed)) {
			if (ball.boost > 1) {ball.boost--} else ball.yspeed *= -1;
		}
	} 
	if (ball.y <= 0) {
		ball.yspeed *= -1;
	}
	if (ball.y >= H-40) {
		ball.yspeed *= -1;	
	}
}

function startgame() {
	console.log("startgame");
	ball.xspeed = Math.round(Math.random());
	ball.yspeed = Math.round(Math.random());
	if (ball.xspeed == 0) { ball.xspeed = -1};
	if (ball.yspeed == 0) { ball.yspeed = -1};
	stStart.remove();
}
function loose(n) {
	ball.x = W/2 - 25;
	ball.y = H/2 - 20;
	ball.boost = 0;
	ball.xspeed = Math.round(Math.random());
	ball.yspeed = Math.round(Math.random());
	if (ball.xspeed == 0) { ball.xspeed = -1};
	if (ball.yspeed == 0) { ball.yspeed = -1};	
}

function move() {
	ball.x += ball.xspeed;
	ball.y += ball.yspeed;
	if ((ball.x < 50 && (ball.y > player1.y && ball.y < player1.y + 250)) || (ball.x + 25 > W - 50 && (ball.y > player2.y && ball.y < player2.y + 250))) { 
		ball.xspeed *= -1;
		ball.yspeed += 1;
		ball.yspeed *= -1;
	}
	if (ball.x < -40) {loose(1)};
	if (ball.x > W) {loose(2)};
	if (ball.y < 0 || ball.y > H - 50) { ball.yspeed *= -1};
	ball.node.style.left = ball.x;
	ball.node.style.top = ball.y;

}
