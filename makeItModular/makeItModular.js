// Same as the filteredLS exercise but encapsulating the filtering function into a module

// We list all the fies in a directory whose path is passed as an argument.
// We only list the files of a filetype that are equal to the second passed argument.
// We do it in an Asyncronous way

var filterFilesByExtensionFunction = require('./filterFilesByExtensionModule.js')

var directoryPath = process.argv[2]
var selectedFileExtension = process.argv[3]

filterFilesByExtensionFunction(directoryPath,selectedFileExtension,function(err,list){
  for (i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
})

/* Solution given by the learnyounode team:

var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})
*/
