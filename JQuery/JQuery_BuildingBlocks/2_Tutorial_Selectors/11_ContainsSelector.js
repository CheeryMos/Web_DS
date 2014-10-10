$(document).ready(function(){
	$('#search_name').keyup(function() {
		//Use keyup function to search for text in unordered list
		search_name = $(this).val();
		
		//Remove highlight at the start to refresh search.
		$('#names li').removeClass('highlight');
		
		if(jQuery.trim(search_name) != '') {
			//Using the contains method to do the search and add the highlight class when character is found
			$("#names li:contains('" + search_name + "')").addClass('highlight');
		}
	});
});