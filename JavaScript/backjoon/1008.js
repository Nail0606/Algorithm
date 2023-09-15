//두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
//split() 뒤에 .map(Number); 을 붙인 뒤, a와 b에 parseInt() 없이도 가능하다.
let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a / b);
