
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


//--- removiendo el frame
	$("#salir").click(function() {
		// body...
		$("#detalles").empty();
		window.close();
	});

});


//opción para cerrar juego
function closeJuego(){
	var decision = confirm("cerrar juego??");
	if (decision){
	 	window.close();
	}else{
	  alert("diviertete!! :D");
	}
	
}

