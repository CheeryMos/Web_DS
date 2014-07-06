function doFirst(){
	mypic = document.getElementById('happy');
	mypic.addEventListener("dragstart", startDrag, false);
	mypic.addEventListener("dragend", endDrag, false);
	leftbox = document.getElementById('leftbox');
	leftbox.addEventListener("dragenter", dragenter, false); //Enter the area - prevent default browser action for drag enter
	leftbox.addEventListener("dragleave", dragleave, false); 
	leftbox.addEventListener("dragover", function(e){e.preventDefault();}, false);  //Drag over - again prevent default actions
	leftbox.addEventListener("drop",dropped , false); //Drop item
}
function endDrag(e){
	pic = e.target;  //Gets the target of the event
	pic.style.visibility = 'hidden';
}
function dragenter(e){
	e.preventDefault();
	leftbox.style.background ="SkyBlue";
	leftbox.style.border="3px solid red";
}
function dragleave(e){
	e.preventDefault();
	leftbox.style.background ="white";
	leftbox.style.border="3px solid blue";
}
function startDrag(e){ //e is short for event
	var code = '<img id="happy" src="happy_small.png" />'; 	//copy of image source code
	e.dataTransfer.setData('Text', code); 					//Store data
}
function dropped(e){
	e.preventDefault();  //No browser default for dropped code
	leftbox.innerHTML = e.dataTransfer.getData('Text') //Get data from text
}
window.addEventListener("load", doFirst, false);
