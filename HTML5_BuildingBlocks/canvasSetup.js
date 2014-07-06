function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d'); //draw 2-D canvas objects, note canvas is global
	
	//Animation for Games - Tutorial 43
	//window.addEventListener("mousemove", mouseMove, false);
	
	//Images on the Canvas - Tutorial 42
	//var pic = new Image();
	//pic.src="happy.png";
	//pic.addEventListener("load", function(){canvas.drawImage(pic,0,0,x.width,x.height)}, false);
	
	
	//Saving and Restoring the Canvas - tutorial 41
	//canvas.font="bold 22px Tahoma"
	//canvas.textAlign="start";
	//canvas.save();  //saves canvas 
	//canvas.fillText("Let's Begin!", 10, 30);
	//canvas.rotate(1);
	//canvas.fillText("after rotation", 60, 30);
	//canvas.restore(); //restore canvas to saved point.
	//canvas.fillText("after restoring", 10, 30);
	
	//Transformations - tutorial 40
	//canvas.font="bold 22px Tahoma";
	//canvas.textAlign="start";
	//canvas.fillText("start", 10,30);
	//canvas.translate(100, 150); //move the canvas
	//canvas.fillText("after translate", 0,0);
	//canvas.rotate(1);  //rotates the canvas - takes radians
	//canvas.fillText("after rotate", 0,0);
	//canvas.scale(1.5, 4); //Scale increases or descreases the size of the canvas
	//canvas.fillText("after scale", 0,20);
	
	
	//Working with Text and Shadows - Tutorial 39
	//canvas.shadowOffsetX = 4;
	//canvas.shadowOffsetY = 4;
	//canvas.shadowBlur = 6;
	//canvas.shadowColor = 'rgba(0,0,255,.5)';
	//canvas.font="bold 36px Tahoma";
	//canvas.textAlign="end";
	////canvas.strokeText("omgwtfbbq", 300,100);
	//canvas.fillText("omgwtfbbq", 300,100);
	
	//Custom Shapes (line coord shapes) - Tutorial 38
	//canvas.beginPath();
	//canvas.moveTo(50,50);
	//canvas.lineTo(70,250);
	//canvas.lineTo(300,200);
	//canvas.closePath();
	//canvas.stroke();
	
	//Linear gredient example - Tutorial 37
	//var g = canvas.createLinearGradient(0,0,100,100);
	//g.addColorStop(.0, "Blue");  //Where to add the first color
	//g.addColorStop(.5, "Green");  //Where to add the first color
	//g.addColorStop(1, "red");     //Where to add the second color
	//canvas.fillStyle=g;
	//canvas.fillRect(0,0,100,100);
	
	//Simple color examples - Tutorial 36
	//canvas.fillStyle="blue";
	//canvas.strokeStyle="red";
	//canvas.strokeRect(10,10,100,100);
	//canvas.fillRect(10,120,100,100);
	//canvas.clearRect(20,130,45,65);  		//remove rect pixels
}

function mouseMove(e){  //Used in tutorial 43
	//canvas.clearRect(0,0,600,400);
	var xPos = e.clientX;  //Horizontal coordinates of the mouse pointer
	var yPos = e.clientY;  //Vertical coordinates of the mouse pointer
	
	canvas.fillRect(xPos-50, yPos-50, 100, 100);  //minus 50 will center the box on the mouse	
}
window.addEventListener("load", doFirst, false);







