//Doesn't work as expected as toggle is used for visibility only properties now.
//The button/link will dissappear and display 'See Ya' in it's place
$('#click_me').toggle(function() {
	$('#click_event').html('Hi There');
}, function() {
	$('#click_event').html('See Ya!');
});