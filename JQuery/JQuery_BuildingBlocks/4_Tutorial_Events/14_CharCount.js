$(document).ready(function(){
	var text_max = 55;
	$('#textarea_feedback').html(text_max + ' Characters remaning');
	
	$('#textarea').keyup(function(){
		var text_length = $(this).val().length;
		var text_remaining = text_max - text_length;
		
		$('#textarea_feedback').html(text_remaining + ' Characters remaning');
	});
});