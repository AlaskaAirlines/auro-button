let fs = require('fs');

function removeExport(path, type) {
  fs.readFile(path, type, function(err, data) {
    const exportPos = data.indexOf('export');
    const exampleScript = data.substring(0, exportPos);
    const writer = fs.createWriteStream(path);

    writer.write(exampleScript);
  });
}

removeExport('./demo/api.min.js', 'utf8');
