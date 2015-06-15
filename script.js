$(document).ready(function(){
	console.log("Script Inlcuded!");
// Hover states for the menu //
	$(".menu li").hover(function(){
		$(this).css("color", "#474747");
	});
	$(".menu li").mouseleave(function(){
		$(this).css("color", "#c6c6c6");
	});
// Ingredient Selector //
	$('.ingredients ul li').click(function() {
		$('.ingredients ul li').addClass('unselected');
		$(this).removeClass("unselected");
		var childNumber = $(this).index();
		switch (childNumber) {
			case 0:
				$('.pointer img').animate({ marginLeft: "115px"}, 250);
				$('.info_box p').replaceWith("<p>Water is a very substantial ingredient of beer, composing of 90-95 percent of beer by mass. Water is utilized in almost every step of the brewing process. The chemistry of the water can influence not just the taste but also the brewing efficiency.</p>");
				break;
			case 1:
				$('.pointer img').animate({ marginLeft: "350px"}, 250);
				$('.info_box p').replaceWith("<p>Barley is the seed of the barley plant, it is a grain that is similar to wheat in appearance. It is harvested mostly in the United States and in Europe. Specific types of barley are used in the production of different types of beers, each strain imparts a unique characteristic taste and body that is suited for different beers.</p>");
				break;
			case 2:
				$('.pointer img').animate({ marginLeft: "575px"}, 250);
				$('.info_box p').replaceWith("<p>Hops are the cone-like flowers of the female hop vine (Humulus Lupulus). At the base of the petal, within the hop flower, there is a soft resin called Lupulin Oil that gives beer its bitter flavor and 'hoppy' aroma. Hops were originally introduced by brewers to help inhibit the growth of beer spoiling bacteria, to maintain flavor stability, and to help retain the head (foam) of the beer. </p>");
				break;
			case 3:
				$('.pointer img').animate({ marginLeft: "790px"}, 250);
				$('.info_box p').replaceWith("<p>Yeast is the most important ingredient in beer brewing. It is a single-celled organism; a fungus (phylum Ascomycetes; class Hemiascomycetes; including 10 different families). Yeast is a living creature, metabolizing, reproducing, and living off the ingredients in the beer. It is responsible for the converting of sugar to alcohol and carbon dioxide in the fermentation stage. Yeast is also the final component that determines the flavor of the beer.</p>");
				break;
		}	
    });
// Cheers Gif Button //
	$('.button').mousedown(function(){
			$(".gif").addClass("gif-on");
	});
	$('.gif').mouseup(function(){
			$(this).removeClass("gif-on");
	});
})