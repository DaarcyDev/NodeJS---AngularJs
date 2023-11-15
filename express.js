const express = require('express');

const server = express();

const colors= require('colors');

server.get('/', function(req, res){
	res.send('<h1>Hola Mundo con Express y NodeJS</h1>')
	res.end()
})


server.listen(3000, function (){
	console.log('Server on port 3000'.red);
})