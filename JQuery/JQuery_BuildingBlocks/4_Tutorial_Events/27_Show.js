$(document).ready(function(){
	$('#a_div').hide();
});

$('#a_button').click(function() {
	//$('#a_div').toggle();
	//$('#a_div').hide('slow');
	//$('#a_div').hide(5000);
	//$('#a_div').hide('slow', 'linear');
	$('#a_div').show('slow', 'linear', function(){
		alert('div shown');
	});
});