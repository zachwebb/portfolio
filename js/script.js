/*global $, window, i*/

"use strict";

$(window).bind("load", function () {
	var portfolioData

	// function menuClose(){
	// 	$('#flyoutCover').fadeOut(200)
	// 	$('#flyoutMenu').animate({
	// 		'right': '-400px'
	// 	}, 200)
	// }

	

	function init(){
		// console.log('init');

		loadData();
		

		// console.log(y);

		// insertFunctionality()
	}

	function loadData(){
    	$.ajax({
	        type: "GET",
	        dataType: "json",
	        url: 'data/manifest.json',
	        success: function (data){
	        	portfolioData = data;
	        },
			complete: function(data){
				loadTemplates(portfolioData);
			},
	        error: function (error){
	        	console.log("portfolio failed to load");
	        }
		});
    };

    function loadTemplates(content){
	    $.ajax({
			url: 'templates/portfolio.handlebars',
			cache: true,
			success: function(data) {
				var template = Handlebars.compile(data);
				for (var i = 0; i < content.portfolio.length ; i++) {
					var html = template(content.portfolio[i]);
					// $('#portWrap').append(html);
					$('#hexGrid').append(html);
				}; 
			},
			complete: function(data){
				insertFunctionality()
			},
	        error: function(error){
	        	console.log("template failed to load");
	        }              
	    });
    };

	function insertFunctionality(){
		// console.log('insertFunctionality');
		$('html, body').scrollTop(0)
		dismissPreloader()

		// swipebox 
	    $( '.swipebox' ).swipebox();
	    $( '.swipebox-video' ).swipebox();
	    function dismissPreloader(){
	    	setTimeout(function(){
	    		$('.plInner').addClass('shrink')
	    		$('#preloader').delay(400).slideUp(300, function(){
	    			checkTop('.ruleSm')
	    		})
	    	}, 1500);
	    }

		function checkTop(el) {
            var viewportBottom = $(window).height();
            var viewportTop = $(window).scrollTop();

            $(el).each(function () {
                var elementTop = $(this).offset().top;
                var elementHeight = $(this).outerHeight();
                var elementBottom = elementTop + elementHeight + 100;
                if ((elementBottom) < (viewportBottom + viewportTop) && !$(this).hasClass('animate') && $(this).is(':visible')) {
                    $(this).addClass('animate');
                } else if ((elementBottom) > (viewportBottom + viewportTop) && $(this).hasClass('animate')) {
                	$(this).removeClass('animate');
                }
            });
        }

        function emailObf (){
			$('#email').html(function(){
				var e = "zach";
				var a = "@";
				var d = "zachwebb";
				var c = ".com";
				var h = 'mailto:' + e + a + d + c;
				$(this).parent('a').attr('href', h);
				return e + a + d + c;
			});
		};

		emailObf()

        function skillFade(){
            var viewportTop = $(window).scrollTop();
            var elementTop = $('#skills').offset().top;

            if (viewportTop >= (elementTop/2)) {
	        	$('.hexSkill').each(function(index){
	        		if ($(this).hasClass('fill')) {
	        		var el = this;
	        		var time = index * 10

	        			setTimeout(function(){ 
	        				$(el).addClass('fillAn')
	        			}, time);
	        		}
	        	})
            }
        }

        $(window).on('scroll', function () {
            checkTop('.ruleSm')
            skillFade()
            // checkTop('#skills .center50')
            // console.log('scroll');
        });
		// checkTop('.ruleSm')
		function scrollTo(hash) {
			console.log('scrollTop');
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 400);
		}
		$(document).on('click', '.mainLogo, .altLogo', function(){
			scrollTo('html')
		})

		$(document).on('click', '#toolMenu a', function(e){
			console.log('click');
			e.preventDefault()
			scrollTo($(this).attr('href'))
			// menuClose();
		})
		// scrollTo('html');
			
		var d = new Date();
		var y = d.getFullYear().toString()

		$('footer .currentYear').text(y)

	    
		$(document).on('click', '.item', function(){
			/*$(this).find('.details').slideToggle()
			
			$(this).toggleClass('active')*/
			$('.item').css('margin-bottom', '')
			$('.stretch').each(function(){
				$(this).removeClass('active')
			})

			var next = $(this).find('.stretch')
			var parentWidth = $(this).parent().width()
			next.addClass('active')
			next.css('width', parentWidth + 'px')
			var height = next.height()
			$(this).css('margin-bottom', (height + 20 + 'px'))
		})

		$(document).on('click', '.featureItem', function(){
			$(this).toggleClass('active')
			$(this).find('.details').slideToggle()
		})

		$(document).on('click', '.nextWrap', function(){
			scrollTo('#skills')
		})

        


		

		/*$(document).on('click', '.item', function(){
			imageDetails($(this))
		})*/

		/*function imageDetails(element){
			var imageArray = [];
			imageArray.imgIndex = element.attr('data-index');
			imageArray.source = element.attr('src');
			imageArray.galleryIndex = element.attr('data-galindex')
		
			var i = imageArray.galleryIndex
			var j = imageArray.imgIndex
			launchGallery(i, j)
		}

		function launchGallery(i, j){
			// $('body').blur()
			// $('body').trigger('click')
			if (window.getSelection) {window.getSelection().removeAllRanges();}
			var images = galleries[i].images[j]
			$('#photoGallery .portfolioTitle').text(galleries[i].name)
			$('#photoGallery .portfolioImage').attr({
				'src': images.source,
				'data-index': j,
				'data-galindex': i
			});
			$('#photoGallery .caption').text(images.caption);

			$('#modals, #photoGallery').fadeIn(200);
		}*/

		/*$(document).on('click', '.galleryNav', function(e){
			e.preventDefault()
			e.stopPropagation()

			var action = $(this).attr('data-action');
			var target = $('#photoGallery .portfolioImage')
			var j = target.attr('data-index');
			var i = target.attr('data-galindex');

			if (action == 'prev') {
				if (j == 0) {
					// If j is 0, that means we are at the first image in the list so we'll check i
					if (i == 0) {
						// if i == 0, we want to go to he last gallery
						i = (galleries.length - 1);
					} else {
						// if i != 0, then we go to the previous gallery
						i = (parseInt(i)-1)
					}
					j = (galleries[i].images.length - 1)
				} else {
					j = (parseInt(j)-1);
				}
			} else if(action == 'next'){
				if (j == (galleries[i].images.length - 1)) {
					j = 0;
					if (i == (galleries.length - 1)) {
						i = 0
					} else {
						i = (parseInt(i)+1)
					}
				} else {
					j = (parseInt(j)+1)
				}
			}
			// imageDetails($(this))
			launchGallery(i,j)
		})*/

	}


	init();
})