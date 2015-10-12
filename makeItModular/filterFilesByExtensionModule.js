// This module implements and exports the same function used on "filteredLS"

var fs = require('fs')
var path = require('path')

module.exports = function listFilesFilteredByExtension(directoryPath,selectedFileExtension,callback) {
	fs.readdir(directoryPath,function listFilesFilteredByExtension(err,list)
		{
			if (err) {
				callback(err, null);
    		} else {
				var result = new Array()
				for (var i = 0; i < list.length; i++) {
					var indexOfPoint = list[i].lastIndexOf(".")
					if (indexOfPoint != -1) {
						var fileExtension = list[i].substring(indexOfPoint+1,list[i].length);
						if (fileExtension == selectedFileExtension) {
							result.push(list[i])
						}
					}
				}
				callback(null,result);
			}
		})
}

/* Solution given by the learnyounode team:

var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
	if (err)
	  return callback(err)

	list = list.filter(function (file) {
	  return path.extname(file) === '.' + filterStr
	})

	callback(null, list)
  })
}

*/
