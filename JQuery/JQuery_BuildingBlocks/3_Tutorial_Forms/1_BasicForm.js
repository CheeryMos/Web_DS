//On focusing in on a text field, change the background to yellow
$(':text').focusin(function (){
	$(this).css('background-color','yellow');
});

//On focusing out of a text field, change the background back to white
$(':text').blur(function() {
	$(this).css('background-color','white');
});

//On clicking a button, change value and disable button
$(':button').click(function() {
	$(this).attr('value', 'Please Wait');
	$(this).attr('disabled', true);
});