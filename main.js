//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
car2_height=100;
car2_width=75;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencarx=5;
greencary=225;
function add() {
	//upload car, and background images on the canvas.
	backgroundimg_tag=new Image();
    backgroundimg_tag.onload=upload_background;
    backgroundimg_tag.src=background_image;
	
    greencar_tag=new Image();
    greencar_tag.onload=upload_greencar;
	greencar_tag.src=greencar_image;
}

function upload_background() {
	//Define function ‘uploadBackground’
	ctx.drawImage(backgroundimg_tag,0,0,canvas.width,canvas.height);
}

function upload_greencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_tag,greencarx,greencary,car2_width,car2_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greencary>=0){
		greencary = greencary - 10 ; 
		console.log("when up arrow pressed x  , y=" + greencarx + greencary)
		upload_background();
		upload_greencar();
		  }
}

function down()
{
	//Define function to move the car downward
	if(greencary>=400){
		greencary= greencary + 10 ; 
		console.log("when up arrow pressed x  , y=" + greencarx + greencary)
		upload_background();
		upload_greencar();
		  }
}

function left()
{
	//Define function to move the car left side
	if(greencarx>=0){
		greencarx = greencarx - 10 ; 
		console.log("when up arrow pressed x  , y=" + greencarx + greencary)
		upload_background();
		upload_greencar();
		  }
}

function right()
{
	//Define function to move the car right side
	if(greencarx<=700){
		greencarx = greencarx + 10 ; 
		console.log("when up arrow pressed x  , y=" + greencarx + greencary)
		upload_background();
		upload_greencar();
		  }
}


