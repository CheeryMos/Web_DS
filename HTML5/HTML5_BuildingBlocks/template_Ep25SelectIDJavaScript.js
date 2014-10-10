function getStuff(){
	//document.querySelector('#tuna').onclick=talk;  //Select the first instance of tuna and call talk
	var list = document.querySelectorAll('#tuna');  //Select all items with the id tuna
	//list[1].onclick=talk;
	for(var i=0; i<list.length; i++){
		list[i].onclick = talk;
	}
}
function talk(){
	alert('omgwtfbbq!');
}
window.onload=getStuff;