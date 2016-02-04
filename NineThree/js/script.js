$(function(){

	var STUDENT_METHOD ={

		handlerData:function(resJSON){

		var templateSource = $("#portfolio-content").html(),

		template = Handlebars.compile(templateSource),

		studentHTML = template(resJSON);

		$('#main-content').html(studentHTML);

		},
		loadPortfolio : function(){

		$.ajax({
		url:"http://localhost:63342/HandleBarDemo/data/studentData.json",
		method:'get',
		success:this.handlerData

		})
		}
		};

		$(document).ready(function(){

		STUDENT_METHOD.loadStudentData();

		});


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

		//var imageheight = $('img.portfolio').outterWidth();
		
		console.log(imageheight);
		$('img.portfolio').height(imageheight);
		//$('img.portfolio').css('height', imageheight);
	};

	heightfix();*/
	
});


// var timer = setInterval(checkPlaylist, 500)

// function checkPlaylist(){
//     var total = 0;
//     $('.vjs-playlist-item').each(function() {
//         total += $(this).outerWidth(true)
//     });
//     if(total > 0){
//         $('.vjs-mouse.vjs-playlist').css({
//             'width': total * 2,
//             'margin-top': '0px'
//     });
//         clearInterval(timer);

//         //playlist advance and stop
//         videoTemp = videojs('vjs_video_3_html5_api');
//         videoTemp.on('ended', function(){
//             videoTemp.playlist.next();
//             if(!videoTemp.paused()){
//                 videoTemp.pause()
//             };
//             rightSlide();
//         })
//         //playlist advance and stop
//     }else{
//         $('.vjs-mouse.vjs-playlist').css({
//             'width': '0px',
//             'margin-top': '-5000px'
//         })
//     };
// }
