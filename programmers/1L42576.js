function solution(participant, completion) {
    const maps = new Map();
    participant.forEach(e => {
        if (maps.has(e)) maps.set(e, maps.get(e) + 1)
        else maps.set(e, 1)
    })
    completion.forEach(e => {
        maps.get(e) === 1 ? maps.delete(e) : maps.set(e, maps.get(e) - 1)
    })
    return Array.from(maps.keys())[0];
}