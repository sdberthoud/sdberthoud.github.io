$(document).ready(function(){
	$('#name').mouseenter(function(){
		$(this).removeClass('blue')
		$(this).addClass('lightblue')
	});
	$('#name').mouseleave(function(event) {
		$(this).removeClass('lightblue')
		$(this).addClass('blue')
	});
});