const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
} catch (error) {
  input = "10 10".trim().split(" ");
}

let hour = parseInt(input[0]);
let minute = parseInt(input[1]);

if (minute >= 45) {
  minute -= 45;
} else {
  minute += 15;
  if (hour === 0) {
    hour += 23;
  } else {
    hour -= 1;
  }
}

console.log(`${hour} ${minute}`);
//다시품
