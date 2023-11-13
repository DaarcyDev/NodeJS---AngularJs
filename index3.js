const fs = require('fs');

fs.readFile('./text.txt', function(err,data){
	if(err){
		console.log(err)
	}
	console.log(data.toString())
})