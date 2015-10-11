module.exports = filterFilesByExtension;

function filterFilesByExtension(dirPath,fileExtension,function filter(

	fs.readdir(dirPath, function (err, list) {
		  list.forEach(function (file) {
		  if (path.extname(file) === '.' + fileExtension)
		      console.log(file)
		  })
		}))
	){

	var fs = require('fs')
	var path = require('path')
}
