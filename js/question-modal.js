$(function(){
    var loading = $('#loadbar').hide();
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
    	loading.hide();
    });
    
    $("label.btn").on('click',function () {
		$('#loader').show();
    	var choice = $(this).find('input:radio').val();
    	$('#loadbar').show();
    	$('#quiz').fadeOut();
    	setTimeout(function(){
			$('#post-preg').show();
           $( "#answer" ).html(  $(this).checking(choice) );      
            $('#loadbar').fadeOut();
			$('#loader').hide();
			$('#preg-l').hide();
           $('#pre-class').show();
		   $('#end-button').show();
    	}, 2000);
    });

    $ans = 3;

    $.fn.checking = function(ck) {
        if (ck != $ans)
            return 'Tu respuesta fue <b>INCORRECTA</b>';
        else 
            return 'Tu respuesta fue <b>CORRECTA</b>';
    }; 
});	
