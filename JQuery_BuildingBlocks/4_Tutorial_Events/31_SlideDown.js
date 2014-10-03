$(document).ready(function() {
  $('#top_message').hide();
  $('#top_message').slideDown(2000);
  
  $('#hide_message').click(function() {
	$('#top_message').slideUp(2000);
  });
});