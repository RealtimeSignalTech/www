//countdown on offer bar

$( document ).ready(function() {
    var offer_date = '2016/10/19';
    init_offer_time(offer_date);
});

function init_offer_time(offer_date) {
    $('#count-down-timer').countdown(offer_date, function(event){
        $(this).html(event.strftime('%D days %H:%M:%S'));
	});
}
$(".close-offer-btn").on("click", function(event){
	$(".offer-bg").remove();
	event.preventDefault();
});
