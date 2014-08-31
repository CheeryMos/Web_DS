$(document).ready(function(){
	$('#check').change(function() {
		state = $(this).val();
		
		if(state == 'on'){
			$('#Continue').removeAttr('disabled');
		} else{
			$('#Continue').attr('disabled', 'disabled');
		}
	});
});
