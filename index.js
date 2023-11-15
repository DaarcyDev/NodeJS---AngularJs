const os = require('os')

const maths= require('./math.js')
const ejercicios = require('./ejercicios.js')

console.log(os.platform())
console.log(os.release())
console.log('Free mem: ', os.freemem(), 'bytes')
console.log('Total mem: ', os.totalmem(), 'bytes')

console.log(ejercicios.saludar())
console.log(ejercicios.ejecutarDespues())
console.log(ejercicios.ejecutarIndemediate())
console.log(ejercicios.timers());
console.log(ejercicios.asincrona());
console.log(ejercicios.sincrona());
console.log(ejercicios.promesas());
console.log(ejercicios.manejadorErrores());
// setImmediate(() => console.log('setImmediate'));
// process.nextTick(() => console.log('nextTick'));
// console.log('end');