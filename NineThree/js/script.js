$(function(){

	$('a.gallery').colorbox({rel:'a.gallery', transition:"none", maxWidth:'95%', maxHeight:'95%'});
	$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390, maxWidth:'95%', maxHeight:'95%'});
	$('.navlink').on('click', function(event) {

		var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, 350);
	    }

	});
	
	/*function heightfix(){
		var imageheight = $( $('img.portfolio').width());
		
		console.log(imageheight);
		$('img.portfolio').height(imageheight);
		//$('img.portfolio').css('height', imageheight);
	};

	heightfix();*/
	
});