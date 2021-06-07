function solution(s) {
    var answer = [];
    const arr = s.replace("{{", "").replace("}}", "").split("},{").map(e => e.split(",").map(el => parseInt(el)));
    const set = new Set();
    arr.sort((a, b) => a.length - b.length).forEach(e => e.forEach(el => set.add(el)));
    return Array.from(set);
}