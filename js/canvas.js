//gets the canvas element
var canvas = document.getElementById('canvas');
//sets up canvas
var context = canvas.getContext('2d');
var isDown;
var x;
var y;
//gets the color and brush range elements
var color = document.getElementById("color");
var size = document.getElementById("range");
var selColourVal;
var selSizeVal;
var clientView;

//mousedown event listener
canvas.onmousedown = function(e) {
  isDown = true;
  //make rounded (smooth) edges
  context.lineJoin = context.lineCap = 'round';
  //set brush width and colour
  context.lineWidth = selSizeVal;
  context.strokeStyle = selColourVal;
  context.moveTo(x,y);
};

//mousemove event listener
canvas.onmousemove = function(e) {
	//get client coordiantes according to scroll
	clientView = canvas.getBoundingClientRect();
	
	//find position of cursor and store to x and y
	x = event.clientX - clientView.left;
	y = event.clientY - clientView.top;
	console.log(x,y);
	
	//change cursor to crosshair when hovering over
	this.style.cursor="crosshair";
	
  if (isDown) {
	//draw
    context.lineTo(x, y);
    context.stroke();
  }
};

//mouseup event listener
canvas.onmouseup = function() {
  isDown = false;
};

//color picker change event listener
color.addEventListener("change", (function(e) {
		//get colour value that was chosen
		selColourVal = color.value;
		console.log(selColourVal);
    }));

//brush width change event listener
range.addEventListener("change", (function(e) {
		//get width value that was chosen
		selSizeVal = range.value;
		console.log(selSizeVal);
    }));