
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

function apply(area, hoverimg, text) {
	$('#area' + area).mouseover(function() {
		$('#brainimg').attr('src', hoverimg);
		$('#brainarea p').html(text);
		$('#link' + area).addClass('empha');
	}).mouseout(function() {
		$('#brainimg').attr('src', "images/brain.png");
		$('#brainarea p').html('<br />');
		$('#link' + area).removeClass('empha');
	}).click(function(e) {
		e.preventDefault();
		$.colorbox({width: "60%", height: "80%", close: "fermer", href: $('#link'+area).attr('href')})
	});
}

var controverse = function() {
	$('#main').hide();
	$('#main').load('controverse.html', function() {
		$('.boxed').colorbox({width: "60%", height: "80%", close: "fermer"});
		apply(1, 'images/brain.png', 'Existence de la Neuroéconomie');
		apply(2, 'images/brain.png', 'Apport de la Neuroéconomie');
		apply(3, 'images/brain.png', 'Problèmes éthiques');
		apply(4, 'images/brain.png', 'Neuromarketing');
		apply(5, 'images/brain.png', 'Protocole expérimental');
	});
	$('#main').fadeIn('slow');

};


$(function() {
	ultimatum();
});
