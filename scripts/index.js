var imgWidth = $(window).width() / 5.5;
var imgHeight = $(window).height() / 5.5;
for(var i = 0;i < 5; i++){
	$('#theTable').append('<tr id="row' + i + '""></tr>');
	for (var j = 0;j < 5; j++){
		$('#row' + i).append('<td><img src="https://unsplash.it/' + imgWidth + j + i + '/' + imgHeight + '?random"></td>');
	}
}

$('td').bind('click', function(){
	if($(this).hasClass('red')){
		$(this).removeClass('red').addClass('blue');
	} else if($(this).hasClass('blue')){
		$(this).removeClass('blue').addClass('yellow');
	} else if($(this).hasClass('yellow')){
		$(this).removeClass('yellow');
	} else {
		$(this).addClass('red');
	}
});