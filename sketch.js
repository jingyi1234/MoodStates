/***********************************************************************************
	MoodStates 
	by Jingyi Zhao

	Template:

	(1) Add your own PNG files in the assets folder. Make sure they match the names ***exactly*** of the existing PNGs.
	(2) Add custom drawing code to drawOne(), drawTwo(), drawThree(), drawFour()
	(3) You can add your own interfaces - keys, mouse events, etc in the Interfaces section

	Also start your localhost before running this, otherwise no PNGs will display

------------------------------------------------------------------------------------
	The way it works — you don't need to know this for the template use
	* array of images gets loaded at startup
	* drawFunction is a VARIABLE that points to a function varible name
	* drawOne(), drawTwo(), etc. are set to be functions.
	* the the keys 1-5 will change the drawFunction variable

------------------------------------------------------------------------------------
	Notes:
	- a more advanced state machine with use array-indexing for each of
		images the draw functions, but this is just for illustrative purposes

	- even more advanced will be to put the draw functions into an array, would
		be helpful for randomizing, go to the next function, etc

	- next step after that would be to put interfaces into an array that maps to
		the functions


***********************************************************************************/

// Array of images
var images = [];
// variable that is a function 
var drawFunction;
// offset from bottom of screen
var gTextOffset = 20;


// load all images into an array
function preload() {
  images[0] = loadImage('assets/allday.png');
  images[1] = loadImage('assets/sleep.png');
  images[2] = loadImage('assets/eat.png');
  images[3] = loadImage('assets/goout.png');
  
}

//
function setup(){
  createCanvas(480,120);
}
// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(1200,800);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // set to one for startup
  drawFunction = drawOne;
}

function draw() {
  background(196);



  // will call your state machine function
  drawFunction();
}

//-- drawOne() will draw the image at index 0 from the array
drawOne = function() {
   image(images[0],500,500,500,500);

   fill(0,0,0);
   text("State One", width/2, height - gTextOffset);
   text("All Day", 300,100,300,300);
}

//-- drawTwo() will draw the image at index 1 from the array
drawTwo = function() {
   image(images[1],500,500,500,500);

   fill(240,120,0);
   text("State Two", width/2, height - gTextOffset);
   text("I just want to sleepppp",500,500,800,800);
}

//-- drawOne() will draw the image at index 2 from the array
drawThree = function() {
   image(images[2],500,500,500,500);

   fill(40,230,120);
   text("State Three", width/2, height - gTextOffset);
   text("I just want to eeeat", 300,500,500,500);
}

//-- drawOne() will draw the image at index 3 from the array
drawFour = function() {
   image(images[3],500,500,500,500);

   fill(255,255,178);
   text("State Four", width/2, height - gTextOffset);
   text("I like to go out....", 5,250,500,500);
}


// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( key === '1' ) {
  	drawFunction = drawOne;
  }
  else if( key === '2' ) {
  	drawFunction = drawTwo;
  }
  else if( key === '3' ) {
  	drawFunction = drawThree;
  }
  else if( key === '4' ) {
  	drawFunction = drawFour;
  }
  
}