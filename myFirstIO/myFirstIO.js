// Show the number of new lines of the text file whose path is passed as an argument.

var filePath = process.argv[2]

var fs = require('fs')

textBuffer = fs.readFileSync(filePath)

textString = textBuffer.toString()

textArray = textString.split("\n")

// We count the number of new lines (there is not a \n at the end of the file, so there is an element
// more at the end. So we have to substract 1 from the total count.
numberOfNewLines = textArray.length - 1

console.log(numberOfNewLines)
