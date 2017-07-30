var imagenes = new Array("img/sumaP.png","img/restaP.png","img/sumaT.png");
var lista_img = new Array()

function cargarImagenes() {
	// body...
	for (var i in imagenes) {
		lista_img[i] = new Image();
		lista_img[i].src = imagenes[i];
	}
	console.log("archivos cargados")
}


cargarImagenes();
