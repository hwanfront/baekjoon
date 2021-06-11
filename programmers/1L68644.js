function solution(numbers) {
    var answer = [];
    const set = new Set();
    numbers.forEach((e, index) => {
        const len = numbers.length;
        for(let i = index + 1; i < len; i++) {
            set.add(e + numbers[i]);
        }
    })
    answer = [...set].sort((b, a) => b - a);
    return answer;
}

console.log(solution([2,1,3,4,1]))
console.log(solution([5,0,2,7]))