$(document).ready(function() {
	$('ul').each(function() {
		//$(this).append('a');
		
		this_sel = $(this);
		
		if(this_sel.has('li').length == 0){
			this_sel.after('Empty menu')
		}
	})
})