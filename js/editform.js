$(document).ready(function(){
    var next = 3;
    $(".add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        next = next + 1;
        var newIn = '</br></br><input autocomplete="off" class="span3 form-control" id="field' + next + '" name="field' + next + '" type="text" placeholder="Alternativa ' + next +'">';
		var newDrop = '<li><a href="#" data-value="Alternativa '+next+'">Alternativa '+next+'</a></li>';
        var newInput = $(newIn);
        $(addto).after(newInput);
		$('#dropdownmenu').append(newDrop);
        $("#field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);  
    });

});
