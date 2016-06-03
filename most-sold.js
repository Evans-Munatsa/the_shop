var fs = require('fs');

//Synchronous function
var findlines = function(folderName) {
  var files = fs.readdirSync('./CSV');
  console.log(files);
  var linesInFiles = [];

files.forEach(function(file){
  var content = fs.readFileSync('./CSV' + file,  'utf-8');
  var lines = content.split('\n');
    lines.forEach(function(line) {
      linesInFiles.push(line);
    });
  });

  console.log(linesInFiles);
  return linesInFiles;
}