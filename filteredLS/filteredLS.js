// We list all the fies in a directory whose path is passed as an argument.
// We only list the files of a filetype that are equal to the second passed argument.
// We do it in an Asyncronous way.

var directoryPath = process.argv[2]
var selectedFileExtension = process.argv[3]

// fs.readdir() method takes a path name as its first argument and a callback as its second. The callback signature is:  function callback (err, list) { /* ... */ }

var fs = require('fs')

fs.readdir(directoryPath,
	function listFilesFilteredByExtension(err,list)
	{
		for (var i = 0; i < list.length; i++) {
			var indexOfPoint = list[i].lastIndexOf(".")
			if (indexOfPoint != -1) {
				var fileExtension = list[i].substring(indexOfPoint+1,list[i].length);
				if (fileExtension == selectedFileExtension) {
					console.log(list[i])
				}
			}
		}
	})


/* another solution:

var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })

*/
