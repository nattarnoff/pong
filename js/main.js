var pong = {};
pong.setBoard = function(){
	$b = $('#board')
	var w = $b.width();
	var h = $b.height();
	var right = pong.paddle($b, "right", w, h);
	var left = pong.paddle($b, "left", w, h);
	var ball = pong.ball($b, w, h);
	return { 
		right : this.right,
		left : this.left,
		ball : this.ball
	}
}
pong.paddle = function(canvas, side, w, h){
	var w = parseInt(w);
	var h = parseInt(h);

	var canvas = document.getElementById(canvas.attr('id'));
	var context = canvas.getContext('2d');
	context.beginPath();
	var tall = 50;
	var wide = 10;
	var top = Math.floor(h/2-tall/2);
	var hor = (side == 'right') ? w-wide-1 : 0+1;
	context.rect(hor, top, wide, tall);
	context.fillStyle = "#fff";
	context.fill();
}
pong.ball = function(canvas, w,h){
	var w = parseInt(w);
	var h = parseInt(h);

	var canvas = document.getElementById(canvas.attr('id'));
	var context = canvas.getContext('2d');
	context.beginPath();
	var tall = 10;
	var wide = 10;
	var top = Math.floor(h/2-tall/2);
	var hor = Math.floor(w/2-wide/2);
	context.rect(hor, top, wide, tall);
	context.fillStyle = "#fff";
	context.fill();
}
$(function(){
	pong.setBoard();
	$(document).keypress(function(e){
		if(e.which === 107){
			console.log("right up");
			// pong.board.right
		}
		if(e.which === 109){
			console.log("right down");
		}
		if(e.which === 115){
			console.log("left up");
		}
		if(e.which === 120){
			console.log("left down");
		}
	});
})