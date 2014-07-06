//doFirst function will setup variables and listeners
function startVideoCustomization(){
	barSize = 600;
	myMovie=document.getElementById('myMovie');
	playButton=document.getElementById('playButton');
	bar=document.getElementById('defaultBar');
	progressBar=document.getElementById('progressBar');
	
	playButton.addEventListener('click',playOrPause,false);
	bar.addEventListener('click',clickedBar,false);
}

//playOrPause function will start or pause the video - video controls
function playOrPause(){
	if(!myMovie.paused && !myMovie.ended){
		myMovie.pause();
		playButton.innerHTML='Play';  		//Change Button Text
		window.clearInterval(updateBar);	//Call to stop updating progress bar
	}else{
		myMovie.play();
		playButton.innerHTML='Pause';  		//Change Button Text
		var updateBar=setInterval(update, 500);
	}
}

//Function to update the progress bar
function update(){
	if(!myMovie.ended){
		var size=parseInt(myMovie.currentTime*barSize/myMovie.duration);
		progressBar.style.width=size+'px';
	}else{
		progressBar.style.width='0px';
		playButton.innerHTML='Play';	
	}
}

//Function to click and update the progress bar
function clickedBar(e){
	if(!myMovie.paused && !myMovie.ended){
		var mouseX = e.pageX-bar.offsetLeft;  			//x position of the mouse based in relation to bar
		var newTime=mouseX*myMovie.duration/barSize; 	//New time based on mouse click
		myMovie.currentTime = newTime; 					//Set the start play time to the new time. 
		
		progressBar.style.width=mouseX+'px';			//Set the width of the progress bar to where the mouse was clicked.
	}
}

window.addEventListener('load',startVideoCustomization,false);