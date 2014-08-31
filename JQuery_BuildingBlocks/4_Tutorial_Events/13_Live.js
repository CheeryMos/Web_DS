//Using doc ready click
$(document).ready(function(){
	$('.duplicate').click(function(){
		$(this).after('<input type="button" value="Click" class="duplicate"/>')
	});
});
//Using live - note depreciated in JQuery 1.7
/*$(document).ready(function(){
	$('.duplicate').live({
		click: function() {
			$(this).after('<input type="button" value="Click" class="duplicate"/>');
		}
	});
});*/