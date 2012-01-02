/* Author:

*/


/*
.============================================================================.
	1. Add placeholder text to IE inputs
'============================================================================'
*/


$(document).ready(function(){
	if (!Modernizr.input.placeholder)
	{
	$.ajax({
		type: "GET",
	   	url: "plugins.js",
	  	dataType: "script",
	  	success: function()
	  	{
	  		$('input').example(function() {
				return $(this).attr('placeholder');
			});
	  	}
	});
	}
});


