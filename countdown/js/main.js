//countdown on offer bar
$( document ).ready(function() {
    $('#clock').countdown('2016/10/10', function(event){
	$(this).html(event.strftime('%D days %H:%M:%S'));
	});
});


