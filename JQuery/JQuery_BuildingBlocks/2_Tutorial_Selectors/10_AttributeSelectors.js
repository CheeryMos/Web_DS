$(document).ready(function() {
	var email_default = "Enter your email address...";
	
	//Select input fields with the type email
	$('input[type="email"]').attr('value', email_default).focus(function() {
		//Remove default message when focusing in
		if($(this).val() == email_default){
			$(this).attr('value','');
		}
	}).blur(function() {
		//Replace the default email if the email is still empty
		if($(this).val() == ''){
			$(this).attr('value', email_default);
		}
	});
});