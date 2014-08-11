//Change background color when clicking in text input
/*$(':text').focusin(function() {
	//alert('Hi There');
	$(this).css('background-color', 'yellow');
});*/

//Change back the background color when click out of text input
//Note blur can be used instead of focusout
/*$(':text').focusout(function() {
	//alert('Hi There');
	$(this).css('background-color', 'white');
});*/

//For all inputs
$(':input').focusin(function() {
	//alert('Hi There');
	$(this).css('background-color', 'yellow');
});
$(':input').focusout(function() {
	//alert('Hi There');
	$(this).css('background-color', 'white');
});