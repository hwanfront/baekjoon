function solution(array, commands) {
    const result = [];
    commands.forEach(e => {
        const newArray = array.slice(e[0] - 1, e[1]).sort((a, b) => a - b);
        result.push(newArray[e[2] - 1])
    })
    return result;
}