/*$('#user_text').keydown(function () {
	//alert('keydown');
	var user_text = $('#user_text').val(); 
	 
	 $('#user_text_feedback').html(user_text);  //place user_text into span
});*/
$('#user_text').keyup(function () {
	//alert('keydown');
	var user_text = $('#user_text').val(); 
	 
	 $('#user_text_feedback').html(user_text);  //place user_text into span
});