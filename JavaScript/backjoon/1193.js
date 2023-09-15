const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim();
} catch {
  input = `6`.trim();
}

let num = 0;
let count = 1;
let flag = 0;
let diff;
let m;
let n;
while (num < input) {
  num += count;
  count++;
  if (flag === 0) {
    flag = 1;
  } else {
    flag = 0;
  }
}
diff = num - input;

if (flag === 0) {
  //짝수 줄
  m = count - 1 - diff;
  n = diff + 1;
} else if (+input === 1) {
  console.log("1/1");
  return;
} else {
  //홀수 줄
  m = diff + 1;
  n = count - 1 - diff;
}
console.log(m + "/" + n);
