function solution(clothes) {
    var answer = 1;
    const map = new Map();
    clothes.forEach(e => {
        if(!map.has(e[1])) {
            map.set(e[1], []);
        };
        map.get(e[1]).push(e[0]);
    });
    const arr = [...map.values()];
    arr.forEach(e => answer *= (e.length + 1));
    return answer - 1;
}

console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]));
console.log(solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]));
