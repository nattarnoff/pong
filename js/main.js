var pong = {};
pong.setBoard = function(){
	$b = $('#board')
	var w = $b.width();
	var h = $b.height();
	pong.paddle($b, "right", w, h);
	pong.paddle($b, "left", w, h);
	pong.ball($b, w, h);
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
	// console.log($('#board'));
})