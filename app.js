var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var size = 100;
var posX = canvasWidth / 2 * 0.75;
var posY = canvasHeight / 2 * 0.75;

context.fillStyle = "rgba(255,0,0, .5)";

context.fillRect( posX, posY, size, size);

posX += size *0.50;
posY += size *0.50;

context.fillStyle = "rgba(0,0,255, .5)";

context.fillRect( posX, posY, size, size);

