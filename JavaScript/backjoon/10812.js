const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `10 5
1 6 4
3 9 8
2 10 5
1 3 3
2 6 2`
    .trim()
    .split("\n");
}

let N = +input[0].split(" ")[0];
let M = +input[0].split(" ")[1];

let arr = [];

for (let i = 0; i < N; i++) {
  arr[i] = i + 1;
}
for (let j = 0; j < M; j++) {
  let startNum = +input[j + 1].split(" ")[0];
  let endNum = +input[j + 1].split(" ")[1];
  let midNum = +input[j + 1].split(" ")[2];
  let beforeArr = arr.slice(midNum - 1, endNum);
  let afterArr = arr.slice(startNum - 1, midNum - 1);
  arr.splice(startNum - 1, endNum - startNum + 1, ...beforeArr, ...afterArr);
}
console.log(arr.join(" "));
