function solution(answers) {
    var answer = [];
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const point = [0,0,0]

    answers.forEach((e, i) => {
        if(e === first[i % 5]) point[0]++;
        if(e === second[i % 8]) point[1]++;
        if(e === third[i % 10]) point[2]++;
    })

    const maxPoint = Math.max(...point);

    for(let i = 0; i < 3; i++) {
        if(maxPoint === point[i]) {
            answer.push(i + 1);
        }
    }
    return answer;
}

solution([1,2,3,4,5]);
solution([1,3,2,4,2]);

