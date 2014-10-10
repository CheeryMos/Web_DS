//Once the button is clicked
$('#toggle_message').click( function() {
	var value = $('#toggle_message').attr('value'); //value is equal to the button value
	$('#message').toggle('fast');					//change message when button is clicked

	if (value == 'Hide') {
		$('#toggle_message').attr('value', 'Show'); //If button value is hide then change to show
	} else if (value == 'Show') {
		$('#toggle_message').attr('value', 'Hide');  //If button value is show then change to hide
	}
	
});