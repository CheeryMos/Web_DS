$('#button').click(function(){
	//Add class when button is clicked
	$('#sometext').addClass('bold');
});
/*$('#toggle').click(function(){
	//toggle class when button is clicked
	if($('#sometext2').hasClass('highlight')){
		$('#sometext2').removeClass('highlight bold');
	}else{
		$('#sometext2').addClass('highlight bold');
	}
});*/
//Easier way to do the above
$('#toggle').click(function(){
	$('#sometext2').toggleClass('highlight bold');
});