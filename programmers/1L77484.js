const solution = (lottos, win_nums) => {
    let zero = 0;
    let correct = 0;
    let max = 0;
    let maxRank = 0;
    let minRank = 0;

    lottos.forEach(e => {
        if (e === 0) zero++;
        if (win_nums.indexOf(e) !== -1) correct++;
    })
    max = zero + correct;
    max ? maxRank = 7 - max : maxRank = 6;
    correct ? minRank = 7 - correct : minRank = 6;
    return [maxRank, minRank];
};

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));