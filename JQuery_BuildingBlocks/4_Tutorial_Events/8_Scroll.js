$('#some_text').scroll(function(){
	var scroll_pos = $('#some_text').scrollTop();  //Get scroll postion for feedback
	$('#some_feedback').html('We are now scrolling at postion ' + scroll_pos);
});