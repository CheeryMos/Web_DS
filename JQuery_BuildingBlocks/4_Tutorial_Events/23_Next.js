$(document).ready(function(){
	//$('.names li:first').append(' (1st)');
	//$('.names li:last').append(' (4th)');
	
	$('.names').find('li').first().append(' (1st)');
	$('.names').find('li').first().next().append(' (2nd)');
	$('.names').find('li').last().append(' (4th)');
	
	//Menu next all function
	$('.menu').find('li').first().click(function(){
		$(this).nextAll().toggle();
	}).nextAll().hide();
});