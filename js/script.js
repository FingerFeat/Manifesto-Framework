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
	$('input').example(function() {
				return $(this).attr('placeholder');
			});
	}
});

