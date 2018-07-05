/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const findIndex = (nums, target, type) => {
  let idx = -1,
    L = 0,
    R = nums.length - 1;

  while (L <= R) {
    const M = parseInt(((R - L) / 2) + L);

    if (nums[M] === target) idx = M;
    if (type === 'first') {
      if (nums[M] >= target) R = M - 1;
      else L = M + 1;
    } else if (type === 'last') {
      if (nums[M] <= target) L = M + 1;
      else R = M - 1;
    }
  }

  return idx;
};

var searchRange = function (nums, target) {
  return [findIndex(nums, target, 'first'), findIndex(nums, target, 'last')];
};