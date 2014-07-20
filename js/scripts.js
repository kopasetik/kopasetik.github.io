$(document).ready(function(){
	//star ratings for the review section, profile page
	var starStuff = $('.avg-rating');
	starStuff.raty({number: 5, score: 4});
	$('#review-1').raty({number: 5, score: 4});
	$('#review-2').raty({number: 5, score: 3});
	$('#review-3').raty({number: 5, score: 5});
});