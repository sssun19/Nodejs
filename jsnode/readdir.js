const dataFolder = './data/';
const fs = require('fs');

fs.readdir(dataFolder, (err, files)=>{
  console.log(files);
  files.forEach(file => {
    console.log(file);
  });
})
