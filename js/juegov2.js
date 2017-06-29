		$(document).ready(function() {
			// body...
			var num = 1;
			var cont=1;
			var estado=true, estado1 = true, estado2 = true;
			var personaje ="";
			
			var contar = 15;
			var puntosJuego = 0;


				//para caja 1
				$("#caja1").click(function(){
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
				$("#caja2").click(function(){
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
				$("#caja3").click(function(){
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

			var muerte = setInterval(function() {
				// body...

				//código para caja1
				if(estado){
					num = getRandomInt(1, 4);
					personaje = "personaje"+num;				
					$("#caja1").addClass(personaje);

					$("#caja1").show();
					estado=false; 
					
				}else{
					
					$("#caja1").removeClass(personaje);

					$("#caja1").hide();
					estado=true; 
				}

				//código para caja2
				if(estado1){
					num = getRandomInt(1, 4);
					personaje1 = "personaje"+num;				
					$("#caja2").addClass(personaje1);

					$("#caja2").show();
					estado1=false; 
					
				}else{
					
					$("#caja2").removeClass(personaje1);

					$("#caja2").hide();
					estado1=true; 
				}

				//código para caja3
				if(estado2){
					num = getRandomInt(1, 4);
					personaje2 = "personaje"+num;				
					$("#caja3").addClass(personaje2);

					$("#caja3").show();
					estado2=false; 
					
				}else{
					
					$("#caja3").removeClass(personaje2);

					$("#caja3").hide();
					estado2=true; 
				}


				//matando el el bucle
				//reemplanazando "cont" con "contar" 
				if(contar <= 0){
					clearInterval(muerte);
					clearInterval(time);
					alert("Fin del juego!!");
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

		//devuelve un número aleatorio en atino entre dos números.
		function getRandomInt(min, max) {
			var ran = Math.random();
		  	return Math.floor( ran * (max - min)) + min;
		}
