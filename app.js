var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var width = 250;
var height = 50;
var posX = (canvasWidth - width) / 2;
var posY = (canvasHeight - height) / 2;

context.fillStyle = "red";

context.fillRect(posX, posY - height, width, height);

context.fillStyle = "white";

context.fillRect(posX, posY , width, height);

context.fillStyle = "green";

context.fillRect(posX, posY + height, width, height);

