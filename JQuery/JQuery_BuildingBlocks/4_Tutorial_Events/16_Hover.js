//Using object e for coordinates
$('.hover').mousemove(function(e){
	//Display coordiantes - test
	//$('#coordinates').text("x: " + e.clientX + " + y: " +e.clientY);
	
	//Get HoverText attribute
	var hovertext = $(this).attr('hovertext');
	$('#hoverdiv').text(hovertext).show();
	$('#hoverdiv').css('top', e.clientY+10).css('left', e.clientX+10);
}).mouseout(function(){ //Hide on mouse out
	$('#hoverdiv').hide();
});