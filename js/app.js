document.addEventListener('DOMContentLoaded', function (){
	let forma = document.forms['forma'];
	let numUno = forma['num1'];
	let numDos = forma['num2'];
	let result = document.getElementById('number');
	const warning = document.getElementById('warning');
	const containerWarning = document.getElementById('warning__container')
	const btnSuma = document.getElementById('suma');
	const btnResta = document.getElementById('resta');
	const btnMult = document.getElementById('mult');
	const btnDiv = document.getElementById('div');
	const empty = document.getElementById('empty');

	const listOperation = [] 

	const verificationList = () => {
		if (listOperation.length == 0){
			empty.style.display = 'flex';
		} else {
			empty.style.display = 'none';
		}
	}

	verificationList();
	
	const loadList = () => {
		let operationHTML = '';
		for (let operation of listOperation.reverse()) {
			operationHTML += createOperation(operation);
		}
		document.getElementById('list').innerHTML = operationHTML;
	}

	const createOperation = (operation) => {
		let operationType = operation.operation;
		let signo = '';
		let color = '';
		if ( operationType == 'SUMA') {
			signo = '+';
			color = '#1E88E5';
		} else if (operationType == 'RESTA') {
			signo = '-';
			color = '#EF5350';
		} else if (operationType == 'MULTIPLICACION') {
			signo = 'x';
			color = '#673AB7';
		} else if (operationType == 'DIVISION') {
			signo = '/';
			color = '#FF5722';
		}

		let operationHTML = `
					<div class="op" id="op" style="background-color: ${color};">
						<h3 class="op_title">${operation.operation}</h3>
						<p class="operation">${operation.numUno} ${signo} ${operation.numDos} = ${operation.result}</p>
					</div>`;
		return operationHTML;
	}

	function verificacion(numUno, numDos) {
		return ((numUno.value).length == 0 || (numDos.value).length == 0);
	}

	function time(warning, containerWarning) {
		warning.innerHTML = 'Por favor introduce los números';
		containerWarning.style.display = 'block';
		setTimeout(function() {
			containerWarning.style.display = 'none';
		}, 2000);
		result.innerHTML = '';
	}

	function clear() {
		warning.innerHTML = '';
		numUno.value = '';
		numDos.value = '';
		setTimeout(function() {
			number.innerHTML = '';
		}, 2000);
	}

	function loadApp(numUno, numDos, result, operation) {
		listOperation.push(new Operation(numUno, numDos, result, operation));
		console.log(listOperation);
		loadList();
	}

	btnSuma.onclick = () => {
		const suma = 'SUMA';

		if (verificacion(numUno, numDos)) {
			time(warning, containerWarning);

		} else{

			let resultOperation = Number(numUno.value) + Number(numDos.value);
			console.log(resultOperation);
			result.innerHTML = resultOperation;
			
			loadApp(numUno.value, numDos.value, resultOperation, suma);	
			clear();
		}
	}


	btnResta.onclick = () => {
		const resta = 'RESTA';

		if (verificacion(numUno, numDos)) {
			time(warning, containerWarning);
		} else {
			
			let resultOperation = Number(numUno.value) - Number(numDos.value);
			console.log(resultOperation);
			result.innerHTML = resultOperation;

			loadApp(numUno.value, numDos.value, resultOperation, resta);
			clear();
		}

	}

	btnMult.onclick = () => {
		const mult = 'MULTIPLICACION'

		if (verificacion(numUno, numDos)) {
			time(warning, containerWarning);

		} else {

			let resultOperation = Number(numUno.value) * Number(numDos.value);
			console.log(resultOperation);
			result.innerHTML = resultOperation;

			loadApp(numUno.value, numDos.value, resultOperation, mult);
			clear();
		}
	}

	btnDiv.onclick = () => {
		const div = 'DIVISION'

		if (verificacion(numUno, numDos)) {
			time(warning, containerWarning);

		} else {
			
			let resultOperation = Number(numUno.value) / Number(numDos.value);
			if (resultOperation != 'Infinity') {
				console.log(resultOperation);
				result.innerHTML = resultOperation;

				loadApp(numUno.value, numDos.value, resultOperation, div);
				clear();

			} else {
				warning.innerHTML = 'No se puede dividir por 0';
				containerWarning.style.display = 'block';
				setTimeout(function() {
					containerWarning.style.display = 'none';
				}, 2000);
				numUno.value = '';
				numDos.value = '';
			}

		}
	}
})

