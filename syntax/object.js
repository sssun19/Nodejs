var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]); //k8805

var i = 0;
while(i < members.length) {
  console.log('array loop', members[i]);
  i++;
}

var roles = {
  'programmer' : 'egoing',
  'designer' : 'k8805',
  'manager' : 'hoya'
};

console.log(roles.designer); //k8805 .연산자를 통해 value 값 가져오기
console.log(roles['designer']); //k8805 Key 값을 통해 value 값 가져오기

for(var name in roles) {
  console.log('object =>', name, '/ value =>', roles[name]);
}
