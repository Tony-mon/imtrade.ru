$(function(){

	

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

		$(".prodRowsOnMain .squerEl").height($(".prodRowsOnMain .squerEl").width());

		if($(window).width() < 481){
			$(".newsRows .squerEl").height($(".newsRows .squerEl").width()/2);
		}


		$(".prodRowsOnMain.partCont .squerEl").height("auto"); 
		$(".prodRowsOnMain.partCont .squerEl .wrap").height($(".prodRowsOnMain .squerEl").width()); 
		
	}

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
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
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
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
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
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});


	topSl();





	

});