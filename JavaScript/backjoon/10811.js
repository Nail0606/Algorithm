const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `5 4
1 2
3 4
1 4
2 2`
    .toString()
    .trim()
    .split("\n");
}
let N = +input[0].split(" ")[0];
let M = +input[0].split(" ")[1];
let arr = [];
for (let i = 0; i < N; i++) {
  arr[i] = i + 1;
}

for (let i = 0; i < M; i++) {
  let I = +input[i + 1].split(" ")[0];
  let J = +input[i + 1].split(" ")[1];
  let reverseArray = arr.slice(I - 1, J).reverse();
  arr.splice(I - 1, reverseArray.length, ...reverseArray);
}
arr = arr.join(" ");
console.log(arr);
