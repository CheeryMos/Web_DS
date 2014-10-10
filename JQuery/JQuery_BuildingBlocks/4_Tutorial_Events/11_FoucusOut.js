//focus in, display message
$('#name').focusin(function(){
	$('#name_span').html('Something was focused in...');
});
$('#age').focusin(function(){
	$('#age_span').html('Something was focused in...again');
});

//focus out, remove html
$('#name').focusout(function(){
	$('#name_span').html('');
});
$('#age').focusout(function(){
	$('#age_span').html('');
});