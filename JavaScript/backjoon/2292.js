const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim();
} catch {
  input = `21`.trim();
}

let count = 1;
let first = 2;
let last = 7;
let flag = 0;

if(+input === 1){
  console.log("1");
}else{
  while(flag === 0){
    if(first <= +input  && +input <= last){
      console.log(count + 1);
      flag = 1;
    }else{
      first = first + 6 * count;
      last = last + 6 * (count + 1);
      count++;
    }
  }
}
