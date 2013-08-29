var pong = {};
var block = {x:1, y:1, w:1, h:1, fill:'#fff'};
var paddleHeight = 50;
var paddleWidth = 10;
var ballHW = 10;
var $b = $('#board');
var w = $b.width();
var h = $b.height();
var speed = 10;
var leftPaddle = $.extend({},block);
leftPaddle.w = paddleWidth;
leftPaddle.h = paddleHeight;
leftPaddle.y = h/2-paddleHeight/2;
var rightPaddle = $.extend({},block);
rightPaddle.w = paddleWidth;
rightPaddle.h = paddleHeight;
rightPaddle.y = h/2-paddleHeight/2;
rightPaddle.x = w-paddleWidth-1;
var ball = $.extend({},block);
ball.h = ballHW;
ball.w = ballHW;
ball.x = w/2-ballHW/2;
ball.y = h/2-ballHW/2;
var canvas = document.getElementById('board');
var ctx = canvas.getContext('2d');
 pong.setBoard = function(){
	
	ctx.beginPath();
	ctx.rect(rightPaddle.x, rightPaddle.y, rightPaddle.w, rightPaddle.h);
	ctx.fillStyle = rightPaddle.fill;
	ctx.fill();
	//left
	ctx.beginPath();
	ctx.rect(leftPaddle.x, leftPaddle.y, leftPaddle.w, leftPaddle.h);
	ctx.fillStyle = leftPaddle.fill;
	ctx.fill();
	//ball
	ctx.beginPath();
	ctx.rect(ball.x, ball.y, ball.w, ball.h);
	ctx.fillStyle = ball.fill;
	ctx.fill();
}
pong.movePaddle = function(dir, paddle){
	if(paddle === 'right'){
		if(dir === 'up' && rightPaddle.y-speed<=0){
			return false;
		} else if(dir =='down' && rightPaddle.y+speed >= h-rightPaddle.h){
			return false;
		}
		ctx.clearRect(rightPaddle.x, rightPaddle.y, rightPaddle.w, rightPaddle.h);
		
		rightPaddle.y = (dir=='up') ? rightPaddle.y-speed : rightPaddle.y+speed;
		
		ctx.beginPath();
		ctx.rect(rightPaddle.x, rightPaddle.y, rightPaddle.w, rightPaddle.h);
	} else {
		if(dir === 'up' && leftPaddle.y-speed<=0){
			return false;
		} else if(dir =='down' && leftPaddle.y+speed >= h-leftPaddle.h){
			return false;
		}
		ctx.clearRect(leftPaddle.x, leftPaddle.y, leftPaddle.w, leftPaddle.h);
		leftPaddle.y = (dir=='up') ? leftPaddle.y-speed : leftPaddle.y+speed;
		ctx.beginPath();
		ctx.rect(leftPaddle.x, leftPaddle.y, leftPaddle.w, leftPaddle.h);
	}
	ctx.fill();
}
pong.moveBall = function(){

	ctx.clearRect(ball.x, ball.y, ball.w, ball.h);
	// ball.x = ball.x+speed/2;
	ball.y = ball.y-speed/2;
	if(ball.y < 0){
		ball.y = ball.y+speed/2;
	} else if (ball.y == h-ball.h){
		ball.y = ball.y-speed/2;
	}
	console.log(ball.y);
	ctx.beginPath();
	ctx.rect(ball.x, ball.y, ball.w, ball.h);
	ctx.fillStyle = ball.fill;
	ctx.fill();
}
pong.ai = function(){
	if(ball.y > leftPaddle.y){
		pong.movePaddle('down', 'left');
	} else {
		pong.movePaddle('up', 'left');
	}
}
$(function(){
	pong.setBoard();
	setInterval('pong.ai()', 75);
	setInterval('pong.moveBall()', 50);
	$(document).keypress(function(e){
		if(e.which === 107){
			console.log("right up");
			pong.movePaddle('up','right');
		}
		if(e.which === 109){
			console.log("right down");
			pong.movePaddle('down','right');
		}
		if(e.which === 115){
			console.log("left up");
			pong.movePaddle('up','left');
		}
		if(e.which === 120){
			console.log("left down");
			pong.movePaddle('down','left');
		}
	});
})