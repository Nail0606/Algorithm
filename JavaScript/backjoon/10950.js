//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let caseCount = +input[0];

for (let i = 1; i <= caseCount; i++) {
  let testCase = input[i].split(" ");
  let testCaseNum = testCase.map((n) => +n);
  console.log(`${testCaseNum[0] + testCaseNum[1]}`);
}
