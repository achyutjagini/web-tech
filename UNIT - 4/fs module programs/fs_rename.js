var fs = require('fs');
fs.rename('simple.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
}
);