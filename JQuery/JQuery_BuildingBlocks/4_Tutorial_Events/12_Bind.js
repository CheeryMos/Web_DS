//Using mouse enter and mouse leave functionality
/*$('a').mouseenter(function() {
	//alert('test');
	$(this).addClass('bold');
}).mouseleave(function(){
	$(this).removeClass('bold');
});*/
//Using bind
$('a').bind('mouseenter mouseleave',function(){
	$(this).toggleClass('bold');  //toggle class add - remove class as the above.
});
