function solution(skill, skill_trees) {
    var answer = 0;
    const arr = [];
    for(let i = 0; i < skill_trees.length; i++) {
        arr.push([]);
    }

    skill_trees.forEach((e, index) => {
        for(let i = 0; i < skill.length; i++) {
            arr[index].push(e.indexOf(skill[i]));
        }
    });

    arr.forEach(e => {
        for(let i = 1; i < e.length; i++) {
            if(e[i - 1] > e[i] && e[i] !== -1) {
                return;
            }
            if(e[i - 1] === -1 && e[i] !== -1) {
                return;
            }
        }
        answer++;
    })
    return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]))