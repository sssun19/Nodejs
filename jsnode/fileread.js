var fs = require('fs');
fs.readFile('sample.txt','UTF-8', (err, data)=> {
  // if (err) console.log(err);
  console.log(data);
});
