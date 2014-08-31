$(document).ready(function() {
	$('#Combine').click(function() {
		var combinedText = '';
		
		$('input[type="text"]').each(function(index){
			combinedText += $(this).val() + ' ';
		});  //Select each type text field
		
		//alert(combinedText);
		$('#Combined').text(combinedText);
	});
});