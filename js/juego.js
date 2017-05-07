
$(document).ready(function() {
	// body...

// parte menú - opciones
	$("#aside").hover(function(){
		$(this).stop().animate({
			left:"0px"
		},500);


	},function(){
		$(this).stop().animate({
			left:"-180px"
		},1500,"easeOutBounce");
	});

});

function closeJuego(){
	var decision = confirm("cerrar juego??");
	if (decision){
	 	window.close();
	}else{
	  alert("lol!!");
	}
	
}