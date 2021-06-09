function solution(genres, plays) {
    let answer = [];
    const map = new Map();
    genres.forEach((e, i) => {
        if(!map.has(e)) {
            map.set(e, []);
        }
        map.get(e).push([i, plays[i]])
    });

    const arr = [...map.values()];
    arr.sort((a, b) => {
        const sumA = a.reduce((acc, cur) => acc + cur[1], 0);
        const sumB = b.reduce((acc, cur) => acc + cur[1], 0);
        return sumB - sumA;
    })
    .map(e => e.sort((a, b) => b[1] - a[1]))
    .forEach(e => {
        answer.push(e[0][0]);
        if(e.length > 1) {
            answer.push(e[1][0]);
        }
    })
    
    return answer;
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]))