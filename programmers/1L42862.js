function solution(n, lost, reserve) {
    const newLost = lost.filter(e => !reserve.includes(e));
    const newReserve = reserve.filter(e => !lost.includes(e));

    const result = newLost.filter(e => {
        if (newReserve.includes(e - 1)) {
            newReserve.splice(newReserve.indexOf(e - 1), 1);
            return false;
        }
        else if (newReserve.includes(e + 1)) {
            newReserve.splice(newReserve.indexOf(e + 1), 1);
            return false;
        }
        return true;
    }).length;

    return n - result;
}