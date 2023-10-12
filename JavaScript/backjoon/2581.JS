const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch (error) {
  input = `1
  5`
    .trim()
    .split("\n");
}

let M = +input[0];
let N = +input[1];
let array = [];
let flag;

for (let i = M; i <= N; i++) {
  flag = 1; //기본적으로 소수라고 간주함.
  if (i === 1) {
    //1을 2로 나눠도 나머지가 없기 때문에 1이 소수로 판별되는것을 막음.
    continue;
  }
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      //만약 나누어떨어지는 수가 있다(=합성수)
      flag = 0; //그때는 소수가 아닌것으로 판정
      break;
    }
  }
  if (flag === 1) {
    //최종적으로 소수 여부를 확인하고 소수라면 배열에 삽입.
    array.push(i);
  }
}
if (array.length === 0) {
  console.log(-1);
} else {
  let sum = array.reduce((acc, cur) => acc + cur, 0);
  console.log(sum);
  console.log(Math.min(...array));
}
