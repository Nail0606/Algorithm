const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let lStack = input[0].split("");
let rStack = [];
let ak = "";
for (let i = 2; i < input.length; i++) {
  if (input[i].length === 3) {
    ak = input[i][2];
  }

  switch (input[i][0]) {
    case "L":
      if (lStack.length !== 0) rStack.push(lStack.pop());
      break;
    case "D":
      if (rStack.length !== 0) lStack.push(rStack.pop());
      break;
    case "B":
      if (lStack.length !== 0) lStack.pop();
      break;
    case "P":
      lStack.push(ak);
  }
}

const result = [...lStack, ...rStack.reverse()]; // rStack reverse
console.log(result.join(""));
