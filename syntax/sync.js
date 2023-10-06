var fs = require('fs');

//readFileSync 동기처리
// console.log('A');
// var result = fs.readFileSync('syntax/sample.txt', 'utf-8');
// console.log(result);
// console.log('C');

//readFile 비동기처리
console.log('A');
fs.readFile('syntax/sample.txt', 'utf-8', (err, result)=>{
  console.log(result);
});
console.log('C');
