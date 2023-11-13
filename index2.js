const fs = require('fs');

fs.writeFile('./text.txt', 'linea uno', function(err){
	if(err){
		console.log('Archivo creado')
	}
	console.log('Archivo creado')
})
console.log('ultima linea de codigo')

//sincrono
const users = query('SELECT * FROM users')

//asincrono
query('SELECT * FROM users', function(err, users){
	if(err){
		console.log(err)
	}
	if(users){
		console.log(users)
	}
})