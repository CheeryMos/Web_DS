//Function to change text size
function change_size(element, size){
	var current = parseInt(element.css('font-size'));  //Get current font-size as Int
	//alert(current);
	if(size == 'smaller'){
		var new_size = current - 2; //If call to smaller decrease size by 2 px
	} else if (size == 'bigger'){
		var new_size = current + 2; //If call to larger increase size by 2 px
	}
	
	element.css('font-size', new_size + 'px'); //Set new size
}

//Call change_size when smaller link is clicked
$('#smaller').click(function() {
	change_size($('p'), 'smaller');
});

//Call change_size when bigger link is clicked
$('#bigger').click(function() {
	change_size($('p'), 'bigger');
});