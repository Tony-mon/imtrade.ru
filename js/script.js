$(function(){

	topSl();

	$( window ).resize(function() {
	  	// $("#pageHTML").removeClass("openMenu");
	  	topSl();
	});

	$("#menuButton").click(function(){
		$("#pageHTML").toggleClass("openMenu");
	});
	

	function topSl(){

		$(".squerEl").each(function(){
			$(this).height($(this).width());
		});

		$(".halfW").each(function(){
			var padding = $(this).css('padding-left').replace('px','');

			var height = parseInt($(this).width()/2) + parseInt(padding) - 5;
			
			console.log(height);

			$(this).height(height);

		});

		$(".prodRowsOnMain .squerEl").height($(".prodRowsOnMain .squerEl").width());

		if($(window).width() < 481){
			$(".newsRows .squerEl").height($(".newsRows .squerEl").width()/2);
		}


		$(".prodRowsOnMain.partCont .squerEl").height("auto"); 
		$(".prodRowsOnMain.partCont .squerEl .wrap").height($(".prodRowsOnMain .squerEl").width()); 
		
	}


});