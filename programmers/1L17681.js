function solution(n, arr1, arr2) {
    var answer = [];

    for(let i = 0; i < n; i++) {
        let line = (parseInt(arr1[i].toString(2)) + parseInt(arr2[i].toString(2))).toString();
        const arr = line.split("");
        if(arr.length < n) {
            const len = arr.length;
            for(let j = 0; j < n - len; j++) {
                arr.unshift("0");
            }
        }
        answer.push(arr.map(e => e !== "0" ? "#" : " ").join(""));
    }
    return answer;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])
solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])
solution(5, [0,0,0,0,0], [30,1,21,17,28])