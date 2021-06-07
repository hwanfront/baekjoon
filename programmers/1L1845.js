function solution(nums) {
    const set = new Set(nums);
    const max = Math.floor(nums.length) / 2;
    const setSize = set.size;
    return max < setSize ? max : setSize;
}