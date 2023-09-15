/*
1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다. 

같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.  
예를 들어, 3개의 눈 3, 3, 6이 주어지면 상금은 1,000+3×100으로 계산되어 1,300원을 받게 된다. 또 3개의 눈이 2, 2, 2로 주어지면 10,000+2×1,000 으로 계산되어 12,000원을 받게 된다. 3개의 눈이 6, 2, 5로 주어지면 그중 가장 큰 값이 6이므로 6×100으로 계산되어 600원을 상금으로 받게 된다.

3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.

*/

const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let [d1,d2,d3] = input.map(n => +n);
let price = 0;

if(d1 === d2 && d2 === d3){
  price = 10000 + d1 * 1000
  console.log(price);
}else if(d1 === d2 && d2 !== d3) {
  price = 1000 + d1 * 100
  console.log(price);
}else if(d2 === d3 && d2 !== d1){
  price = 1000 + d2 * 100
  console.log(price);
}else if(d1 === d3 && d1 !== d2){
  price = 1000 + d1 * 100
  console.log(price);
}else{
  price = Math.max(d1, d2, d3) * 100;
  console.log(price);
}

//알게된 코드
if(a !== b && a !== c && b !== c) {
  const sort = [a, b, c].sort();  
  return console.log(sort.pop() * 100);
}
//조건문이 깔끔하고,정렬하면 큰 값이 맨 뒤에 오게 된다는 것을 이용함 
