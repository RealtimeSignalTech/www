//countdown on offer bar
$( document ).ready(function() {
    $('#clock').countdown('2016/10/19', function(event){
	$(this).html(event.strftime('%D days %H:%M:%S'));
	});
});


$(".close-offer-btn").on("click", function(event){
	$(".offerBg").remove();
	event.preventDefault();
});

