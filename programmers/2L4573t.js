function solution(s) {
    var answer = 0;
    for(let i = 1; i < s.length / 2 + 1; i++) {
        const arr = [];
        for(let j = 0; j < s.length; j += i) {
            const str = s.slice(j, j + i);
            if(arr[arr.length - 1] === str) {
                arr.pop();
                if(Number.isInteger(arr[arr.length - 1])) arr[arr.length - 1]++;
                else arr.push(2);
            }
            arr.push(str);
        }
        const len = arr.join("").length
        if(answer === 0 || answer > len) answer = len;
    }
    return answer;
}

console.log(solution("aabbaccc"))
console.log(solution("ababcdcdababcdcd"))
console.log(solution("abcabcdede"))
console.log(solution("abcabcabcabcdededededede"))
console.log(solution("xababcdcdababcdcd"))