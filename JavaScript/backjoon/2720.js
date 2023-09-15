const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `3
  124
  25
  194`
    .trim()
    .split("\n");
}

let T = +input[0];
let Quarter = 25;
let Dime = 10;
let Nickel = 5;
let Penny = 1;

for (let i = 1; i <= T; i++) {
  let C = +input[i];
  let Q = parseInt(C / Quarter);
  let Qn = C % Quarter;
  let D = parseInt(Qn / Dime);
  let Dn = Qn % Dime;
  let N = parseInt(Dn / Nickel);
  let Nn = Dn % Nickel;
  let P = parseInt(Nn / Penny);
  console.log(Q, D, N, P);
}
