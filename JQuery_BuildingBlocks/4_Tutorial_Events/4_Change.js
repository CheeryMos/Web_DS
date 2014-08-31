$('#list').change(function() {
	var list_value = $(this).val();
	$('#list_feedback').html('You have choosen: ' + list_value);
});