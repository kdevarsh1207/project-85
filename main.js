//nothing is wrong, i just tried to make it turn but, it becomes invisible when i click left and right keys//
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

greencar_width = 75;
greencar_height = 100;
//greencar2_width = 75;
//greencar2_height = 100;
//greencar3_width = 75;
//greencar3_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "up down.png";
//greencar_image2 = "left.png"
//greencar_image3 = "right.png"

greencar_x = 5;
greencar_y = 225;
//greencar2_x = 5;
//greencar2_y = 225;
//greencar3_x = 5;
//greencar3_y = 225;



function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = greencar_image;
	greencar_imgTag.src = greencar_image;
	//greencar_imgTag2 = new Image();
	//greencar_imgTag2.onload = greencar_image2;
	//greencar_imgTag2.src = greencar_image2;
	//greencar_imgTag3 = new Image();
	//greencar_imgTag3.onload = greencar_image3;
	//greencar_imgTag3.src = greencar_image3;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}

//function uploadgreencar2() {
//	ctx.drawImage(greencar2_imgTag, greencar2_x, greencar2_y, greencar2_width, greencar2_height);
//}

//function uploadgreencar3() {
//	ctx.drawImage(greencar3_imgTag, greencar3_x, greencar3_y, greencar3_width, greencar3_height);
//}
	



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
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		//greencar2_y = greencar2_y - 10;
		//greencar3_y = greencar3_y - 10;
		console.log("when up arrow is pressed, x = " + greencar_x+ "| y = " +greencar_y);
		 uploadBackground();
		 uploadgreencar();
	}
}

function down()
{
	if(greencar_y <=300)
	{
		greencar_y = greencar_y + 10;
		//greencar2_y = greencar2_y + 10;
		//greencar3_y = greencar3_y + 10;
		console.log("when down arrow is pressed, x = " + greencar_x+ "| y = " +greencar_y);
		 uploadBackground();
		 uploadgreencar();
	}
}

function left()
{
	if(greencar_x >=0)
	{
		greencar_x = greencar_x - 10;
		//greencar2_x = greencar_x - 10;
		//greencar3_x = greencar_x - 10;
		console.log("when left arrow is pressed, x = " + greencar_x+ "| y = " +greencar_y);
		 uploadBackground();
		 //uploadgreencar2();
		 uploadgreencar();
	}
}

function right()
{
	if(greencar_x <=700)
	{
		greencar_x = greencar_x + 10;
		//greencar2_x = greencar2_x + 10;
		//greencar3_x = greencar3_x + 10;
		console.log("when right arrow is pressed, x = " + greencar_x+ "| y = " +greencar_y);
		 uploadBackground();
		 //uploadgreencar3();
		 uploadgreencar();
	}
}
