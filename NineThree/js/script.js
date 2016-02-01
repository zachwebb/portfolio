jQuery(document).ready(function(){

	jQuery("#gallery").unitegallery({
		grid_space_between_cols:0,
		grid_space_between_rows:0,
		tile_enable_border:false,
		tile_enable_shadow:false,
		grid_padding:0,
		tile_width:300,
		tile_height:300,
		lightbox_type: "compact",
		lightbox_arrows_position: "inside",
		tile_enable_textpanel:true,
		tile_textpanel_title_text_align: "center",
	});
	
	$('.navlink').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, 350);
	    }

	});
});



