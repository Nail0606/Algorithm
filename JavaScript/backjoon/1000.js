//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

//처음에는 이렇게 작성했다
//단순히 a,b로 값이 주어지는줄 알았고, js로 입력하는 법을 몰랐다.

console.log(A + B);

//그 후 js에서의 입력 방법에 대해 알게 되었다.

var fs = require("fs"); //fs
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b);

// fs모듈의 readFileSync 함수를 통해 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
// 읽어들인 정보는 toString()함수를 통해 문자열로 변환하여야 사용할 수 있다.
// 입력 받은 문자열을 split() 함수를 통해 배열화한다. (split(' '), split('\n') 등)
// 예) 2 3 입력시, inputData = ['2', '3']
