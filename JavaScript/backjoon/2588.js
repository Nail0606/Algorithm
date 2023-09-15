const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); //항상 입력되는 값의 줄바꿈을 확인하자
let a = parseInt(input[0]);
let b = parseInt(input[1]);

let b1 = parseInt(b / 100) * 100; //백의 자리 수
let b3 = b % 10; // 일
let b2 = (b % 100) - b3; //십의 자리 수

num3 = a * b3;
num4 = (a * b2) / 10;
num5 = (a * b1) / 100;
num6 = num3 + num4 * 10 + num5 * 100;

console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
