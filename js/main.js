//Auto suggestion usinf Json
var datalist = document.getElementById("json-datalist");
var input = document.getElementById("ajax");
var request = new XMLHttpRequest();
request.onreadystatechange = function(response){
	if (request.readyState === 4) {
		if (request.status === 200) {
			var jsonOptions = JSON.parse(request.responseText);
			jsonOptions.forEach(function(item){
				var option = document.createElement('option');
				option.value = item;
				datalist.appendChild(option);
			});
		}
	}
};

request.open('GET', 'all-courses1.json', true);
request.send();

//countdown on offer bar
$( document ).ready(function() {
    $('#clock').countdown('2016/10/10', function(event){
	$(this).html(event.strftime('%D days %H:%M:%S'));
	});
});


