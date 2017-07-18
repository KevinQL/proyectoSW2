
$(document).ready(function() {
	// body...
	/* muestra la descripción de las instrucciones del juego. la iformación de las instrucciones 
		estarán almacenadas en una base de datos y por lo tanto usaremos un asrchivo php
		para poder imprimirlos. 
		Usamos las etiquetas iframes debido a que este nos permite cargar un archivo. Estaremos
		cargado un archivo dentro de otro archivo sin la necesidad de estar recargando el archivo que contiene
		*/
	$("#instrucciones").click(function(e){
		$("#detalles").css("z-index","100");
		$("#detalles iframe").attr("src","detallesjuego.html");
	});	
	$("#cerrarInstruccion").click(function(e) {
		// body...
		$("#detalles").css("z-index","-100");
	});



});
