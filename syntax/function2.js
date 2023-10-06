console.log(Math.round(1.2));//1
console.log(Math.round(1.8));//2

function sum(a, b) { //parameter 매개변수
  console.log (a+b);
}

sum(2,4); //argument 인자


function sum2(a, b) { //parameter 매개변수
  return a+b;
}

console.log(sum2(2,4));

function sum3 (first, second) {
  console.log('a');
  return first+second;
  console.log('b'); //return 을 만나면 함수는 즉시 실행 중지
}

console.log(sum3(2,4));
