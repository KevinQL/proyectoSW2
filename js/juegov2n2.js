function aaaplayGame(pj){
		$(document).ready(function() {
			// body...
			var num = 1;
			var cont=1;
			var estado=true, estado1 = true, estado2 = true;
			var personaje ="";
			
			var contar = 16;
			var puntosJuego = pj;

			document.getElementById('puntos').innerHTML = "Listos YA!!";

				//para caja 1
				$("#caja1-n2").click(function(){
					var personaje = $(this).attr("class");

					if(personaje == "personaje1"){
						//suma puntos
						puntosJuego++;
						document.getElementById('puntos').innerHTML = "puntos : " + puntosJuego;
						console.log("puntos : " + puntosJuego); 
					}
					if(personaje == "personaje2"){
						//quita puntos
						puntosJuego--;
						document.getElementById('puntos').innerHTML = "puntos : " + puntosJuego;
						console.log("puntos : " + puntosJuego); 
					}
					if(personaje == "personaje3"){
						//suma tiempo
						contar +=5;
						console.log("tiempo : " + contar); 
					}

					console.log("nooo" + personaje);
				});
				//para caja 2
				$("#caja2-n2").click(function(){
					var personaje = $(this).attr("class");

					if(personaje == "personaje1"){
						//suma puntos
						puntosJuego++;
						document.getElementById('puntos').innerHTML = "puntos : " + puntosJuego;
						console.log("puntos : " + puntosJuego); 
					}
					if(personaje == "personaje2"){
						//quita puntos
						puntosJuego--;
						document.getElementById('puntos').innerHTML = "puntos : " + puntosJuego;
						console.log("puntos : " + puntosJuego); 
					}
					if(personaje == "personaje3"){
						//suma tiempo
						contar +=5;
						console.log("tiempo : " + contar); 
					}

					console.log("nooo" + personaje);
				});
				//para caja 3
				$("#caja3-n2").click(function(){
					var personaje = $(this).attr("class");

					if(personaje == "personaje1"){
						//suma puntos
						puntosJuego++;
						document.getElementById('puntos').innerHTML = "puntos : " + puntosJuego;
						console.log("puntos : " + puntosJuego); 
					}
					if(personaje == "personaje2"){
						//quita puntos
						puntosJuego--;
						document.getElementById('puntos').innerHTML = "puntos : " + puntosJuego;
						console.log("puntos : " + puntosJuego); 
					}
					if(personaje == "personaje3"){
						//suma tiempo
						contar +=5;
						console.log("tiempo : " + contar); 
					}

					console.log("nooo" + personaje);


				});
				//----


			var muerte = setInterval(function() {
				// body...

				//código para caja1-n2
				if(estado){
					num = getRandomInt(1, 4);
					personaje = "personaje"+num;				
					$("#caja1-n2").addClass(personaje);
/*-----------nivel 2 */
                var x = $( "#juego" ).width();
				var y =$( "#juego" ).height();
					
				 var variablewith =x/2 -100;
				 var variableheigth = y/2 -100;
					
				 $( "#caja1-n2" ).css( "left", getRandomInt(0, variablewith) );
				 $( "#caja1-n2" ).css( "top", getRandomInt(0, variableheigth) );

/*-----------/nivel 2 */

					$("#caja1-n2").show();
					estado=false; 
					
				}else{
					
					$("#caja1-n2").removeClass(personaje);

					$("#caja1-n2").hide();
					estado=true; 
				}

				//código para caja2-n2
				if(estado1){
					num = getRandomInt(1, 4);
					personaje1 = "personaje"+num;				
					$("#caja2-n2").addClass(personaje1);
/*-----------nivel 2 */
                 var x = $( "#juego" ).width();
				 var y =$( "#juego" ).height();
					
				 var variablewith =x -100;
				 var variableheigth = y/2 -100;
					
				 $( "#caja2-n2" ).css( "left", getRandomInt(x/2, variablewith) );
				 $( "#caja2-n2" ).css( "top", getRandomInt(0, variableheigth) );

/*-----------nivel 2 */

					$("#caja2-n2").show();
					estado1=false; 
					
				}else{
					
					$("#caja2-n2").removeClass(personaje1);

					$("#caja2-n2").hide();
					estado1=true; 
				}

				//código para caja3-n2
				if(estado2){
					num = getRandomInt(1, 4);
					personaje2 = "personaje"+num;				
					$("#caja3-n2").addClass(personaje2);
/*-----------nivel 2 */
                var x = $( "#juego" ).width();
				var y =$( "#juego" ).height();
					
				 var variablewith =x -100;
				 var variableheigth = y-100;
					
				 $( "#caja3-n2" ).css( "left", getRandomInt(0, variablewith) );
				 $( "#caja3-n2" ).css( "top", getRandomInt(y/2, variableheigth) );

/*-----------nivel 2 */

					$("#caja3-n2").show();
					estado2=false; 
					
				}else{
					
					$("#caja3-n2").removeClass(personaje2);

					$("#caja3-n2").hide();
					estado2=true; 
				}


				//matando el el bucle
				//reemplanazando "cont" con "contar" 
				if(contar <= 0){
					clearInterval(muerte);
					clearInterval(time);
					alert("Fin del juego!!");

					$("#caja1-n2").removeClass(personaje2);
					$("#caja1-n2").hide();
					$("#caja2-n2").removeClass(personaje2);
					$("#caja2-n2").hide();
					$("#caja3-n2").removeClass(personaje2);
					$("#caja3-n2").hide();

				}
				console.log(cont);
				cont++;
			},1000);

			//contar = 0; 
			var time = setInterval(function(){

				var countTime = document.getElementById('countTime');
				if(contar > 0)//para evitar que se impriman numeros negativos
					countTime.innerHTML = parseInt(--contar);

			},1000);

				
		});
}//final function aaaplayGame()


		//devuelve un número aleatorio en atino entre dos números.
		function getRandomInt(min, max) {
			var ran = Math.random();
		  	return Math.floor( ran * (max - min)) + min;
		}

//---- probando funciones inicio

function inicioTodo(){
	window.aaaplayGame(0);
}
