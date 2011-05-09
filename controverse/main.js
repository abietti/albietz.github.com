
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
		$.colorbox({width: "80%", height: "80%", close: "fermer", href: $('#link'+area).attr('href')})
	});
}

var controverse = function() {
	$('#main').hide();
	$('#main').load('controverse.html', function() {
		$('.boxed').colorbox({width: "80%", height: "80%", close: "fermer"});
		apply(1, 'images/brain.png', 'La neuroéconomie : simple label ou véritable dicipline ?');
		apply(2, 'images/brain.png', 'Economie ou neurosciences : qui bénéficie vraiment de la neuroéconomie ?');
		apply(3, 'images/brain.png', 'Nouveaux domaines de recherche donc nouveaux protocoles, expériences controversées ?');
		apply(4, 'images/brain.png', 'Ethique');
		apply(5, 'images/brain.png', 'Pour approfondir...')
		$('#dollar').hover(function() {
			$('#brainarea p').html('Une application concrète ou une dérive de la neuroéconomie ?');
			$('#link6').addClass('empha');
		}, function() {
			$('#brainarea p').html('<br />');
			$('#link6').removeClass('empha');
		});
		//apply(5, 'images/brain.png', 'Une application concrète ou une dérive de la neuroéconomie ?');
	});
	$('#main').fadeIn('slow');

};


$(function() {
	controverse();
});
