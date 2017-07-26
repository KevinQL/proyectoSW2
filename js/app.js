
const $filtrostoggle = $("#filtros-toggle");

$filtrostoggle.click(function(e) {
	e.preventDefault();
	const $i = $filtrostoggle.find("i.fa");
	const isDown = $i.hasClass("fa-chevron-down");
	//console.log(isDown);//vomprobando valor 
	if (isDown) {
		$i.removeClass("fa-chevron-down");
		$i.addClass("fa-chevron-up");
	}else{
		$i.removeClass("fa-chevron-up");
		$i.addClass("fa-chevron-down");
	}	
})	