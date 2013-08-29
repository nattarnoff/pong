var pong = {};
var block = {x:1, y:1, w:1, h:1, fill:'#fff'};
var paddleHeight = 50;
var paddleWidth = 10;
var ballHW = 10;
var $b = $('#board');
var w = $b.width();
var h = $b.height();
var speed = 12;
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
 pong.setBoard = function(){
	var canvas = document.getElementById('board');
	var ctx = canvas.getContext('2d');
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
	var canvas = document.getElementById('board');
	var ctx = canvas.getContext('2d');
	if(paddle === 'right'){
		ctx.clearRect(rightPaddle.x, rightPaddle.y, rightPaddle.w, rightPaddle.h);
		rightPaddle.y = (dir=='up') ? rightPaddle.y-speed : rightPaddle.y+speed;
		ctx.beginPath();
		ctx.rect(rightPaddle.x, rightPaddle.y, rightPaddle.w, rightPaddle.h);
	} else {
		ctx.clearRect(leftPaddle.x, leftPaddle.y, leftPaddle.w, leftPaddle.h);
		leftPaddle.y = (dir=='up') ? leftPaddle.y-speed : leftPaddle.y+speed;
		ctx.beginPath();
		ctx.rect(leftPaddle.x, leftPaddle.y, leftPaddle.w, leftPaddle.h);
	}
	ctx.fill();
}
$(function(){
	pong.setBoard();
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