const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let totalPrice = +input[0];
let count = +input[1];
let totalPrice2 = 0;
for (let i = 0; i < count; i++) {
  let thing = input[i + 2].split(" ");
  let thing_price = thing[0];
  let thing_count = thing[1];
  totalPrice2 += thing_price * thing_count;
}
if (totalPrice === totalPrice2) {
  console.log("Yes");
} else {
  console.log("No");
}
