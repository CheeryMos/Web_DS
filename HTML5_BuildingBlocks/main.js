function doFirst(){
	var button = document.getElementById("button");
	button.addEventListener("click", saveCrap,false);
	display();
}
function saveCrap(){
	var one = document.getElementById("one").value;
	var two = document.getElementById("two").value;
	sessionStorage.setItem(one, two);  //makes a key value pair as a session
	// A session lasts as long as the browser is open.
	
	display(); //display saved item in right box 
	document.getElementById("one").value = "";
	document.getElementById("two").value = "";
}
function display(){
	var rightbox = document.getElementById("rightbox");
	rightbox.innerHTML = "";
	
	for(var x = 0; x<sessionStorage.length; x++){
		var a = sessionStorage.key(x);   	//get key 
		var b = sessionStorage.getItem(a); 	//get value
		
		rightbox.innerHTML += a+" - "+b+"<br />"; 
	}
}
window.addEventListener("load", doFirst, false);