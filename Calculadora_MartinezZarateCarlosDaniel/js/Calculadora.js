//Alumno: Carlos Daniel Martinez Zarate
// variables
const calculadora = document.getElementById('calculadora')
const resultado = document.getElementById('resultado')
let newNumber = true

// eventos
calculadora.addEventListener('click',añadirNumeros)

// Operaciones
let operaciones = []

// añadirNumeros
function añadirNumeros(e){
	if(e.target.getAttribute('type') === 'button'){
		if(e.target.id != 'clear' && e.target.id != 'borrar' && e.target.id != 'igual'){
			if(e.target.className === 'operacion'){
				if(resultado.value != ''){
					operaciones = Array.from(resultado.value)
					if(operaciones[operaciones.length-1] === '+' ||
					operaciones[operaciones.length-1] === '-' ||
					operaciones[operaciones.length-1] === '/' ||
					operaciones[operaciones.length-1] === '*'){
						if(e.target.innerText === 'x'){
							operaciones[operaciones.length-1] = '*'
						}else{
							operaciones[operaciones.length-1] = e.target.innerText
						}
						resultado.value = operaciones.join('')
						newNumber = true
					}else if(operaciones[operaciones.length-1] != '.'){
						if(e.target.innerText === 'x'){
							resultado.value += '*'
						}else{
							resultado.value += e.target.innerText
						}
						newNumber = true
					}
				}
			}else{
				if(e.target.id === 'period'){
					if(resultado.value === ''){
						resultado.value += '0.'
						newNumber = false
					}else if(newNumber == true){
						operaciones = Array.from(resultado.value)
						if(operaciones[operaciones.length-1] === '+' ||
						operaciones[operaciones.length-1] === '-' ||
						operaciones[operaciones.length-1] === '/' ||
						operaciones[operaciones.length-1] === '*'){
							resultado.value += '0.'
						}else{
							resultado.value += e.target.innerText
						}
						newNumber = false
					}
				}else{
					resultado.value += e.target.innerText
				}
			}
		}
		if(e.target.id === 'igual'){
			const resultadoOperacion = eval(resultado.value)
			resultado.value = resultadoOperacion
			if(resultado.value.includes(".")){
				newNumber = false
			}
		}
		if(e.target.id === 'borrar'){
			operaciones = Array.from(resultado.value)
			let deleted = operaciones.pop()
			if(deleted === '.'){
				newNumber = true
			}
			resultado.value = operaciones.join('')
		}
		if(e.target.id === 'clear'){
			calculadora.reset()
			resultado.value = ''
			newNumber = true
		}
	}
}