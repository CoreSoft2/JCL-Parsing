var fs = require('fs');
const parsers = require('cobol-parsers');
 
var jclScript = new String(fs.readFileSync('tesst.jcl'));
var jclParsed = parsers.jcl.parseJob(jclScript);
// jclParsed.statements.forEach( element => {
//     console.log("---------------------")
//     console.log(element.parsedArgs)
//     console.log("---------------------")
// })

fs.writeFile('parsedFile.json', JSON.stringify(jclParsed), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });