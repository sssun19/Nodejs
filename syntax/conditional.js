var args = process.argv;
console.log(args[2]);
var flag = args[2];

console.log('A');
console.log('B');

if(flag==='1') {
  console.log('C1');
} else {
  console.log('C2');
}
console.log('D');
