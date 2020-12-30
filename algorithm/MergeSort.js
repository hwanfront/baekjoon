function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {

    let result = [];

    while (left.length && right.length) {
        +left[0] < +right[0] ? result.push(left.shift()) : result.push(right.shift());
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    return result;
}
