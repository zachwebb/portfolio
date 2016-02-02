$(function(){

$(document).ready(function(){

	$("#gallery").unitegallery({
		lightbox_arrows_position: "outside",
		lightbox_overlay_opacity:.8,
		lightbox_textpanel_enable_description: true,
		lightbox_type: "compact",
		theme_autoplay: true,
		tile_enable_icons: false,
		tile_overlay_color: "#ffffff",
		tiles_justified_row_height: 200,
		tiles_type:"justified",
		
		// gallery_width:"100%",
		// grid_num_rows:9999,
		// grid_padding:0,
		// grid_space_between_cols:0,
		// grid_space_between_rows:0,
		// lightbox_arrows_position: "outside",
		// lightbox_overlay_opacity:.8,
		// lightbox_type: "compact",
		// lightbox_textpanel_enable_description: true,
		// tile_overlay_color: "#ffffff",
		// tile_enable_border:false,
		// tile_enable_icons: false,
		// tile_enable_shadow:false,
		// tile_height:250,
		// tile_width:250,
	});
	
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