const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
} catch {
  input = `99 36`.trim().split(" ");
}

let dict = [];
let k = 65;
for (let i = 10; i < 36; i++) {
  dict[String.fromCharCode(k)] = i;
  k = k + 1;
}

let B = Number(input[1]);
let N = input[0];
let j = N.length;
let sum = 0;

for (let i = 0; i < N.length; i++) {
  if (!+N[i]) {
    j--;
    sum += dict[N[i]] * B ** j;
  } else {
    j--;
    sum += Number(N[i]) * B ** j;
  }
}
console.log(sum);
