/*	First way
$(document).ready(function() {
	//When a file is choosen/attributes changed
	$('#file').change(function() {
		$('#submit').removeAttr('disabled');
	});
});*/

//Second way
$(document).ready(function() {
	
	$('input[type="file"]').change(function() {
		//On change enable next input
		$(this).next().removeAttr('disabled');
	}).next().attr('disabled', 'disabled'); //Disable any input after type file
});