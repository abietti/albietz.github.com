
var ultimatum = function() {
	$('#main').hide();
	$('#main').load('ultimatum.html', function() {
		$('#reponseOui,#reponseNon').children().hide();
		$('#ouinon a').click(function() {
			//$('#reponseOui,#reponseNon').children().hide();
			$('#ouinon').hide();
			$('#reponse'+$(this).html()).children().slideDown();
		});
	});
	$('#main').fadeIn('slow');
	
};

var controverse = function() {
	$('#main').hide();
	$('#main').load('controverse.html', function() {
		$('.boxed').colorbox({width: "60%", height: "80%", close: "fermer"});
	});
	$('#main').fadeIn('slow');

};

$(function() {
	ultimatum();
});
