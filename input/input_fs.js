// 백준 파일입력 받기
const fs = require("fs")

// 문자 하나
const input = fs.readFileSync("/dev/stdin").toString()

// 한 칸 띄어쓰기로 구분
const input = fs.readFileSync("/dev/stdin").toString().split(" ")

// 만약 인풋값이 숫자라면
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map((e) => {return Number(e)})

// 줄바꿈으로 구분
const input = fs.readFileSync("/dev/stdin").toString().split("\n")


// input[0], input[1] 배열에서 꺼내쓰면 된다.