//Setup on document ready
$(document).ready(function(){
	//Canvas Setup
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var width = $("#canvas").width();
	var height = $("#canvas").height();
	
	//Cell width setup to control snake
	var cellWidth = 10;
	var direction, foodCell, score, bombCell, bombTimer;
	var snakeArray;
	var startScreenBool = true;
	var gameOverScreenBool = false;
	
	//Inital setup for snake
	function init(){
		direction = "right"; //default direction
		createSnake(); //function to create snake
		createFood(); //function to create cell or food
		createBombCell();
		score = 0; 		//Initial score is 0
		
		//The snake will move using a timer which calls a paint function
		if(typeof game_loop != "undefined"){
			clearInterval(game_loop);
		}
		game_loop = setInterval(paint, 60);
	}
	
	startScreen();
	//Call init now but we'll put a control on it later
	//init();
	
	//Function to create the snake
	function createSnake(){
		var length = 5; // inital snake length
		snakeArray = []; //Empty array to start with
		for(var i = length-1; i >= 0; i--){
			//create a horizontal snake in the top left corner
			snakeArray.push({x:i, y:0});
		}
	}
	
	//Function to create a food cell
	function createFood(){
		//creates a cell
		foodCell = {
			x: Math.round(Math.random()*(width-cellWidth)/(cellWidth)),
			y: Math.round(Math.random()*(height-cellWidth)/(cellWidth))
		};
	}
	
	//Function create bomb cell
	function createBombCell(){
		//creates a cell
		bombTimer = 100;
		bombCell = {
			x: Math.abs(Math.round(Math.random()*(width-(cellWidth))/(cellWidth)) - 5),
			y: Math.abs(Math.round(Math.random()*(height-(cellWidth))/(cellWidth)) - 5)
		};
	}
	
	//Function to paint the snake
	function paint(){
		ctx.fillStyle = "white";
		ctx.fillRect(0,0,width,height); //canvas background will be white
		ctx.strokeStyle = "black";
		ctx.strokeRect(0,0,width,height); //canvas border will be black
		
		//Snake movement is done by placing a cell infront of the previous 
		//snake head cell
		var snakeX = snakeArray[0].x;
		var snakeY = snakeArray[0].y;
		//Increment base on current direction
		if(direction == "right"){snakeX++;}
		if(direction == "left"){snakeX--;}
		if(direction == "up"){snakeY--;}
		if(direction == "down"){snakeY++;}
		
		//Game over conditions
		//Restart the game if snake collides with a wall or with itself
		if(snakeX == -1 || snakeX == width/cellWidth || snakeY == -1 || snakeY == height/cellWidth || checkBodyCollision(snakeX, snakeY, snakeArray) || checkBombCollision(snakeX, snakeY, bombCell.x, bombCell.y)){
			//restart game will change to game over screen later
			gameOverScreenBool = true;
			gameOverScreen();
			return;
		}
		
		//Food conditions
		//Upon colliding with a food cell create a new head instead of moving the snake
		if(snakeX == foodCell.x && snakeY == foodCell.y){
			var tail = {x: snakeX, y: snakeY};
			score++;
			// create new food
			createFood();
			createBombCell();
		}else{
			var tail = snakeArray.pop(); //pops out the last cell
			tail.x = snakeX; tail.y = snakeY;
		}
		
		//Now we add the tail as the first cell in the snake array
		snakeArray.unshift(tail);
		
		for(var i=0; i < snakeArray.length; i++){
			var cell = snakeArray[i];
			//paint 10px wide cells
			paintCell(cell.x, cell.y);
		}
		
		//Painting food cell
		paintCell(foodCell.x, foodCell.y);
		
		//Painting score
		var scoreText = "Score: " + score;
		ctx.fillText(scoreText, 5, height-5);
		
		//Painting bomb cell
		bombTimer--;
		if(bombTimer < 0){
			createBombCell();
			createFood();
		}
		
		paintBombCell(bombCell.x, bombCell.y);
	}
	
	//Function to paint a bomb cell
	function paintBombCell(x, y){
		ctx.fillStyle = "red";
		//Box print
		for(var i = 0; i < 4; i++){
			ctx.fillRect((x+i) * cellWidth, y * cellWidth, cellWidth, cellWidth);
			ctx.fillRect((x+i) * cellWidth, (y+3) * cellWidth, cellWidth, cellWidth);
		}
		ctx.fillRect(x * cellWidth, (y+1) * cellWidth, cellWidth, cellWidth);
		ctx.fillRect(x * cellWidth, (y+2) * cellWidth, cellWidth, cellWidth);
		ctx.fillRect((x+3) * cellWidth, (y+1) * cellWidth, cellWidth, cellWidth);
		ctx.fillRect((x+3) * cellWidth, (y+2) * cellWidth, cellWidth, cellWidth);
		
		//Timer print
		ctx.font = 'italic 12pt Calibri';
		ctx.fillText(bombTimer, (x+1) * cellWidth, (y+2.5) * cellWidth);
		
	}
	
	//Function to check a bomb collision
	function checkBombCollision(x, y, bombX, bombY){
		for(var i = 0; i < 4; i++){
			if((bombX+i) == x && (bombY+i) == y){
				return true;
			}
		}
		
		if( (bombX == x && (bombY+1) == y) ||
			(bombX == x && (bombY+2) == y) ||
			((bombX+3) == x && (bombY+1) == y) ||
			((bombX+3) == x && (bombY+2) == y) ){
				return true;
		}
		
		return false;
	}
	
	//Function to paint a cell
	function paintCell(x, y){
		ctx.fillStyle = "blue";
		ctx.fillRect(x * cellWidth, y * cellWidth, cellWidth, cellWidth);
		ctx.strokeStyle = "white";
		ctx.strokeRect(x * cellWidth, y * cellWidth, cellWidth, cellWidth);
	}
	
	//Function to check a body collision
	function checkBodyCollision(x, y, array){
		//check is x/y is in an array of cells
		for(var i = 0; i < array.length; i++){
			if(array[i].x == x && array[i].y == y){
				return true;
			}
		}
		return false;
	}
	
	//Add controls for the keyboard
	$(document).keydown(function(e){
		var key = e.which;
		//add clauses to prevent reverse
		if(key == "37" && direction != "right"){direction = "left";}
		else if(key == "38" && direction != "down"){direction = "up";}
		else if(key == "39" && direction != "left"){direction = "right";}
		else if(key == "40" && direction != "up"){direction = "down";}
	});
	
	//Function to display a start screen instead of the game just starting
	function startScreen(){
		ctx.fillStyle = "white";
		ctx.fillRect(0,0,width,height); //canvas background will be white
		ctx.strokeStyle = "black";
		ctx.strokeRect(0,0,width,height); //canvas border will be black
		
		ctx.fillStyle = "Black";
		ctx.font = 'italic 14pt Calibri';
		ctx.fillText("Welcome to Snake with bombs, to play please click the screen", 5, height-250);
	}
	
	//Function to display a game over screen
	function gameOverScreen(){
	    ctx.fillStyle = "white";
		ctx.fillRect(0,0,width,height); //canvas background will be white
		ctx.strokeStyle = "black";
		ctx.strokeRect(0,0,width,height); //canvas border will be black
		
		ctx.fillStyle = "Black";
		ctx.font = 'italic 14pt Calibri';
		ctx.fillText("Game Over, to play again please click the screen", 5, height-250);	
	}
	
	//Function to start game by clicking the canvas
	$("#canvas").click(function(){
		if(startScreenBool || gameOverScreenBool){
			startScreenBool = gameOverScreenBool = false;
			init();
		}
	});
});



































