const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `3
1
4
5
7
9
6
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30`
    .toString()
    .trim()
    .split("\n");
}
let arr = [];
let answer = [];
for (let i = 0; i < 30; i++) {
  arr[i] = i + 1;
}
for (let i = 0; i < arr.length; i++) {
  if (input.indexOf(arr[i].toString()) === -1) {
    answer.push(arr[i].toString());
  }
}
answer = answer.join("\n");
console.log(answer);
