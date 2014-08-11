//Select select by button
$(':button').click(function() {
	alert('Hi There');
});
//Select select by submit
$(':submit').click(function() {
	//alert('Hi There Submit');
	$(this).attr('value', 'Please Wait')
});
