const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `6
12
28
-1`.trim().split("\n");
}


for(let i = 0; i < input.length; i++){
  let arr = [];
  let N = +input[i];
  if(N === -1) {
    return;
  }
  for(let j = 1; j<= parseInt(N /2); j++){
    if(N % j === 0){
      arr.push(j);
    }
  }
  let sum = arr.reduce((a,b) => a+b,0);
  if( sum === N ){
    console.log(`${N} = ${arr.join(" + ")}`)
  }else{
    console.log(`${N} is NOT perfect.`)
  }
  
}