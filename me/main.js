$('document').ready(function(){

	setTimeout(function(){
		$(window).scrollTop(0);
	}, 50);

	$('#pageOneNav').css({'background-color' : 'rgba(50, 134, 164, .5)', 'color': '#fff'});

	var win = $(window);
	var nav = $('.navItem');
	var s1 = parseInt($('#pageOne').offset().top);
	var s2 = parseInt($('#pageTwo').offset().top);
	var s3 = parseInt($('#pageThree').offset().top);
	var s4 = parseInt($('#pageFour').offset().top);
	var s5 = parseInt($('#pageFive').offset().top);
	var target;
	var navLink;

	// console.log(s5.offset().top);

	nav.on('click', function(e){
		e.preventDefault();
		target = $(this.getAttribute('href'));
		// Turn this off after testing
		// console.log(target.offset().top);
		$('html, body').stop().animate({
			scrollTop: target.offset().top,
		}, 700);
	});

	win.scroll(function(){
		var section = win.scrollTop();
		// Turn this off after testing
		// console.log(section);

		if (section > s1 && section < (s2 - 158)) {
			$(nav).css({'background-color' : '', 'color': 'rgb(50, 134, 164)'});
			$('#pageOneNav').css({'background-color' : 'rgba(50, 134, 164, .5)', 'color': '#fff'});
		} else if (section > (s2 - 158) && section < (s3 - 209)) {
			$(nav).css({'background-color' : '', 'color': 'rgb(50, 134, 164)'});
			$('#pageTwoNav').css({'background-color' : 'rgba(50, 134, 164, .5)', 'color': '#fff'});
		} else if (section > (s3 - 209) && section < (s4 - 262)) {
			$(nav).css({'background-color' : '', 'color': 'rgb(50, 134, 164)'});
			$('#pageThreeNav').css({'background-color' : 'rgba(50, 134, 164, .5)', 'color': '#fff'});
		} else if (section > (s4 - 262) && section < (s5 - 313)) {
			$(nav).css({'background-color' : '', 'color': 'rgb(50, 134, 164)'});
			$('#pageFourNav').css({'background-color' : 'rgba(50, 134, 164, .5)', 'color': '#fff'});
		} else if (section > (s5 - 313)) {
			$(nav).css({'background-color' : '', 'color': 'rgb(50, 134, 164)'});
			$('#pageFiveNav').css({'background-color' : 'rgba(50, 134, 164, .5)', 'color': '#fff'});
		}
	});
});
