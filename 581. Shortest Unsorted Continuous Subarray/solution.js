/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let left;
  let right;
  let min = Number.MAX_VALUE;
  let max = -Number.MAX_VALUE;
  
  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    min = Math.min(min, num);
    if (num > min) left = i;
  }
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    max = Math.max(max, num);
    if (num < max) right = i;
  }
  
  if (!left && !right) return 0;
  return right - left + 1;
};