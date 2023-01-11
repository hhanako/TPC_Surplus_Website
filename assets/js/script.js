$(document).ready(function(){
	$(".btn").click(function(){
		var attr = $(this).attr("data-li");

		$(".btn").removeClass("active");
		$(this).addClass("active");

		$(".item").hide();

		if(attr == "Bundle"){
			$("." + attr).show();
		}
		else if(attr == "Graphics_Card"){
			$("." + attr).show();
		}
		else if(attr == "Others"){
			$("." + attr).show();
		}
		else if(attr == "Case"){
			$("." + attr).show();
		}
		else if(attr == "RAM"){
			$("." + attr).show();
		}
		else{
			$(".item").show();
		}
	});
});