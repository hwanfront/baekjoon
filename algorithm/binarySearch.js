const binarySearch = (target, arr) => {
  let low = 0;
  let high = arr[arr.length - 1];

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    else if (arr[mid] > target) {
      high = mid - 1;
    }
    else {
      low = mid - 1;
    }
  }
  return -1;
}
