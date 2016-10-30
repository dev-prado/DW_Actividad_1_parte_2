$(function() {
		$('#preguntas').hide();
		$('#postanswer').hide();
		$('#preanswer').show();
		setTimeout(function(){
			$('#postanswer').show();
			$('#preanswer').hide();
    	}, 1500);		
});