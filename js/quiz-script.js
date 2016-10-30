$(function(){
	$('#quiz-div').hide();
	$('#post-preg').hide();
	$('#loader').hide();
	$(document).ready(function() {setTimeout(function(){
            $('#quiz-div').show();
            $('#pre-class').fadeOut();
			$('#end-button').fadeOut();
           /* something else */
    	}, 3000);
    });
});