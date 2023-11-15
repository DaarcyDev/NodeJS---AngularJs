// usando npx
// npm install -g npx

//evenloop
// El "event loop" o "bucle de eventos" es un concepto fundamental en JavaScript, especialmente en entornos como Node.js.Es el mecanismo que permite a JavaScript manejar operaciones asincrónicas a pesar de ser un lenguaje de un solo hilo.
const ejercicio={}

function saludar(){
	setTimeout(() => {
		console.log('hola')
	},2000)
}


//process.nextTick()
function ejecutarDespues(){
	process.nextTick(function(){
		console.log('ejecutando Despues')
	})
}

// setinmediate()
// setImmediate() es una función en Node.js que programa una función para ser ejecutada después de que se complete el ciclo de eventos actual.
function ejecutarIndemediate(){
	setImmediate(function(){
		console.log('ejecutando inmediatamente')
	})
}

//jsTimers
// Este código define una función llamada timers que utiliza la función setInterval de JavaScript para ejecutar un bloque de código repetidamente a intervalos de tiempo específicos.
function timers(){
	let contador=0
	const intervalo = setInterval(function(){
		console.log('timers')
		
		if(contador===3){
			clearInterval(intervalo)
		}
		contador++;
	},1000)
}

//programacion asincrona
function asincrona(){
	const fs = require('fs');
	function leerArchivoAsync(callback){
		fs.readFile('./text.txt', function(err,data){
			if(err){
				console.log(err)
			}
			callback(data.toString())
		})
	
	}

	leerArchivoAsync((err,data)=>{
		if(err){
			console.log("error al leer archivo ", err)
		}
		console.log("el contenido del archivo es: ", data)
	})
}

function sincrona() {
	const fs = require('fs');

	function leerArchivoSync() {
		try {
			const data = fs.readFileSync('./text.txt');
			return data.toString();
		} catch (err) {
			console.log("error al leer archivo sync ", err);
			return null;
		}
	}

	const data = leerArchivoSync();
	if (data !== null) {
		console.log("el contenido del archivo sync es: ", data);
	}
}

// introduccion a las promesas
function promesas(){
	function cargarDatos() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const exito = false;
				if (exito) {
					resolve('los datos fueron cargados correctamente')
				} else {
					reject('error al cargar los datos')
				}
			}, 2000)
		})
	}
	cargarDatos()
		.then((mensaje) => console.log(mensaje))
		.catch((error) => console.log(error))
}

//manejador de errores
function manejadorErrores(){
	const fs = require('fs');
	function leerArchivo(){
		try{
			const data = fs.readFileSync('./text.txt');
			console.log("contenido del archivo: ", data.toString());
		} catch(err){
			console.log("error al leer archivo: ", err);
		}
	}
	leerArchivo();
}


ejercicio.saludar=saludar
ejercicio.ejecutarDespues=ejecutarDespues
ejercicio.ejecutarIndemediate=ejecutarIndemediate
ejercicio.timers=timers
ejercicio.asincrona=asincrona
ejercicio.sincrona=sincrona
ejercicio.promesas=promesas
ejercicio.manejadorErrores=manejadorErrores

module.exports=ejercicio