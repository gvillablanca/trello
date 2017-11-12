function trello() {//al presionar boton click agrego evento
	//el elemento que contiene todo lo que estamos creando
	var container = document.getElementById('container');
	//contenedor que tendra la nueva tarjeta
	var tarjeta = document.getElementById('tarjeta');
	//crear un boton y un input porque es lo que debe aparecer al presionar el click
	var input = document.createElement('input');//el input que debe aparecer
	var btn = document.createElement('button');//el boton que debe aparecer
	var textbtn = document.createTextNode('Guardar');//texto del boton

	//atributos
	input.setAttribute('id', 'valor');//agregar atributos al input
	btn.setAttribute('class', 'botonGuardar')
	
	container.appendChild(btn);//boton es hijo de container
	btn.appendChild(textbtn);//el texto guardar es hijo del boton
	container.appendChild(input);//input es hijo de container

	btn.addEventListener('click', function (){//al presionar boton guardar agrego evento
		var textinp = document.getElementById('valor').value; //capturo el texto que hay en el input
		document.getElementById('valor').value = "";//limpiar el input
		var contiene = document.getElementById('contiene'); //llamo al div contiene para pasarle el texto del input

		var parrafo = document.createElement('p');//creo un parrafo
		parrafo.setAttribute ('id' , 'parrafo')
		var textNew = document.createTextNode(textinp);// le paso el texto dedl input al parrafo 

		parrafo.appendChild(textNew);//texto sera hijo de parrafo
		contiene.appendChild(parrafo);//pararfo sera hijo del div contiene


		var addCard = document.createElement('button');//creo el elemento agregar
		addCard.setAttribute('id', 'añadirTarjeta');
		var textadd= document.createTextNode('añadir tarjeta');//agrego texto a mi nuevo elemento

		addCard.appendChild(textadd);//textadd es hijo de a
		contiene.appendChild(addCard);//addCard es hijo de contiene

		addCard.addEventListener('click', function(){//al presionar agregar tarjeta agrego evento
			var textarea = document.createElement('textarea');//creo un textarea
			textarea.setAttribute('id', 'cuadro');//le doy atributos

			contiene.appendChild(textarea);//textarea es hijo de contiene

			var addCard2 = document.createElement('button');//creo el elemento agregar tarjeta nuevamente
			addCard2.setAttribute('id', 'addCard2');
			var textadd2= document.createTextNode('añadir');//agrego texto a mi nuevo elemento

			addCard2.appendChild(textadd2);//textadd es hijo de a
			contiene.appendChild(addCard2);//addCard2 es hijo de contiene

			var borrar = document.createElement('button');
			borrar.setAttribute('id', 'borrar');
			var textbtn2 = document.createTextNode('x');

			borrar.appendChild(textbtn2);
			contiene.appendChild(borrar);

			addCard2.addEventListener('click', function (){//al presionar boton guardar agrego evento
				var textevent = document.getElementById('cuadro').value; //capturo el texto que hay en el input
				document.getElementById('cuadro').value = "";//limpiar el input
				var contiene = document.getElementById('contiene'); //llamo al div contiene para pasarle el texto del input
				//contenedor que tendra la nueva tarjeta
				var tarjeta = document.getElementById('tarjeta');

				var parrafo2 = document.createElement('p');//creo un parrafo
				parrafo2.setAttribute ('id' , 'parrafo2')
				var textNew = document.createTextNode(textevent);// le paso el texto dedl input al parrafo 

						parrafo2.appendChild(textNew);//texto sera hijo de parrafo
						contiene.appendChild(parrafo2);//pararfo sera hijo del div contiene


			})

		})
	})


}