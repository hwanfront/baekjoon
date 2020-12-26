// 백준 파일입력 받기
var fs = require("fs")

// 문자 하나
var input = fs.readFileSync("/dev/stdin").toString()

// 한 칸 띄어쓰기로 구분
var input = fs.readFileSync("/dev/stdin").toString().split(" ")

// 만약 인풋값이 숫자라면
var input = fs.readFileSync("/dev/stdin").toString().split(" ").map(function(a) {return +a})

// 줄바꿈으로 구분
var input = fs.readFileSync("/dev/stdin").toString().split("\n")


// input[0], input[1] 배열에서 꺼내쓰면 된다.