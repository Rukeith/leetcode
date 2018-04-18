/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  nums = Array.from(new Set(nums));
  const len = nums.length;
  if (len <= 2) return Math.max(...nums);
  if (len === 3) return Math.min(...nums);
  nums = nums.sort((a, b) => b - a);
  return nums[2];
};