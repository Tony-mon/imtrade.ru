$(function(){

	// Блок новостей на главной
	$(".newsOnMain .rows").slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  arrows: false,
	  responsive: [
	    {
	      breakpoint: 960,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 512,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	//Бренды  
	$(".brendRows").slick({
	  vertical: true,
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 8,
	  slidesToScroll: 8,
	  arrows: false,
	  responsive: [
	    {
	      breakpoint: 960,
	      settings: {
	        slidesToShow: 10,
	        slidesToScroll: 10
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        vertical: false,
	      }
	    }
	  ]
	});


	// Партнеры
	$(".logosCarusel .cWrapper").slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 7,
	  slidesToScroll: 7,
	  responsive: [
	    {
	      breakpoint: 960,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 5
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4
	      }
	    }
	  ]
	});

	$( window ).resize(function() {
	  	// $("#pageHTML").removeClass("openMenu");
	  	topSl();
	});

	// Добавление и удаления класса адаптивного меню
	$("#menuButton").click(function(){
		$("#pageHTML").toggleClass("openMenu");
	});

	$("body").click(function (event) {
		 if ( 
		  $(event.target).closest(".mainMenu").length === 0 
		 ) {
		 	$("#pageHTML").removeClass("openMenu");
		 }
	})

	// Поиск на адаптивном разрешение
	$("body").click(function (event) {
		 if ( 
		  $(event.target).closest(".mainMenu .pull-right").length === 0 
		 ) {
		  $(".mainMenu .pull-right").removeClass("shown");
		 }
	})

	$(".mainMenu .pull-right").click(function(){
		$(this).addClass("shown");
	});	
	//-----------------------------------

	function topSl(){

		$(".squerEl").each(function(){
			$(this).height($(this).width());
		});

		$(".halfW").each(function(){
			var padding = $(this).css('padding-left').replace('px','');

			var height = parseInt($(this).width()/2) + parseInt(padding) - 5;

			$(this).height(height);

		});

		$(".brendRows").height($(".brendRows .row").height() * 8 + 69);

		if($(window).width() < 961){
			$(".brendRows").height($(".brendRows .row").height() * 10 + 69);
			$(".aboutBlock, .newsOnMain .inner").height($(".aboutBlock").width()/3);
			$(".aboutBlock .img").height($(".aboutBlock .img").width());			
		}
		if($(window).width() < 768){
			$(".brendRows .row").width($(".brendRows").width()/2);
			$(".aboutBlock, .newsOnMain .inner").height($(".aboutBlock").width()/2);
		}
		if($(window).width() < 620){
			$(".newsOnMain .inner").height($(".newsOnMain .inner").width());
		}

		$(".prodRowsOnMain .squerEl").height($(".prodRowsOnMain .squerEl").width());

		if($(window).width() < 481){
			$(".newsRows .squerEl").height($(".newsRows .squerEl").width()/2);
		}


		$(".prodRowsOnMain.partCont .squerEl").height("auto"); 
		$(".prodRowsOnMain.partCont .squerEl .wrap").height($(".prodRowsOnMain .squerEl").width()); 
		
	}


	topSl();





	

});