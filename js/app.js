document.addEventListener('DOMContentLoaded', function (){
	let forma = document.forms['forma'];
	let num1 = forma['num1'];
	let num2 = forma['num2'];
	let result = document.getElementById('number');
	const warning = document.getElementById('warning');
	const container_warning = document.getElementById('warning__container')
	const btnSuma = document.getElementById('suma');
	const btnResta = document.getElementById('resta');
	const btnMult = document.getElementById('mult');
	const btnDiv = document.getElementById('div');

	const listOperation = [] 

	const load = () => {
		let operationHTML = '';
		for (let operation of listOperation) {
			operationHTML += createOperation(operation);
		}
		document.getElementById('list').innerHTML = operationHTML;
	}

	const createOperation = (operation) => {
		let a = operation.operation;
		let signo = '';
		let color = '';
		if ( a == 'SUMA') {
			signo = '+';
			color = '#1E88E5';
		} else if (a == 'RESTA') {
			signo = '-';
			color = '#EF5350';
		} else if (a == 'MULTIPLICACION') {
			signo = 'x';
			color = '#673AB7';
		} else if (a == 'DIVISION') {
			signo = '/';
			color = '#FF5722';
		}

		let operationHTML = `
					<div class="op" id="op" style="background-color: ${color};">
						<h3 class="op_title">${operation.operation}</h3>
						<p class="operation">${operation.num1} ${signo} ${operation.num2} = ${operation.result}</p>
					</div>`;
		return operationHTML;
	}

	function verificacion(v1, v2) {
		return ((v1.value).length == 0 || (v2.value).length == 0);
	}

	function time(w, cw) {
		w.innerHTML = 'Por favor introduce los números';
		cw.style.display = 'block';
		setTimeout(function(){
			cw.style.display = 'none';
		}, 2000);
		result.innerHTML = '';
	}

	function clear() {
		warning.innerHTML = '';
		num1.value = '';
		num2.value = '';
	}

	function loadApp(n1, n2, r, o) {
		listOperation.push(new Operation(n1, n2, r, o));
		console.log(listOperation);
		load();
	}

	btnSuma.onclick = () => {
		const suma = 'SUMA';

		if (verificacion(num1, num2)) {
			time(warning, container_warning);

		} else{

			let resultado = Number(num1.value) + Number(num2.value);
			console.log(resultado);
			result.innerHTML = resultado;
			
			// Pruebas
			
			loadApp(num1.value, num2.value, resultado, suma);
			clear();	

		}
	}


	btnResta.onclick = () => {
		const resta = 'RESTA';

		if (verificacion(num1, num2)) {
			time(warning, container_warning);
		} else {
			
			let resultado = Number(num1.value) - Number(num2.value);
			console.log(resultado);
			result.innerHTML = resultado;

			loadApp(num1.value, num2.value, resultado, resta);
			clear();
		}

	}

	btnMult.onclick = () => {
		const mult = 'MULTIPLICACION'

		if (verificacion(num1, num2)) {
			time(warning, container_warning);

		} else {

			let resultado = Number(num1.value) * Number(num2.value);
			console.log(resultado);
			result.innerHTML = resultado;

			loadApp(num1.value, num2.value, resultado, mult);
			clear();
		}
	}

	btnDiv.onclick = () => {
		const div = 'DIVISION'

		if (verificacion(num1, num2)) {
			time(warning, container_warning);

		} else {
			
			let resultado = Number(num1.value) / Number(num2.value);
			if (resultado != 'Infinity') {
				console.log(resultado);
				result.innerHTML = resultado;

				loadApp(num1.value, num2.value, resultado, div);
				clear();
			} else {
				warning.innerHTML = 'No se puede dividir por 0';
				container_warning.style.display = 'block';
				setTimeout(function() {
					container_warning.style.display = 'none';
				}, 2000);
				num1.value = '';
				num2.value = '';
			}

		}
	}
})

