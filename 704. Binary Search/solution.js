/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) return -1;
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    const index = (left === right) ? left : Math.floor((left + right) / 2);
    if (nums[index] === target) return index;
    else if (nums[index] < target) left = index + 1;
    else right = index - 1;
  }

  return -1;
};