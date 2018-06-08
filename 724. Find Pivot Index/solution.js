/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let sum = 0;
  let half = 0;
  for (let i = nums.length - 1; i > -1; i--) sum += nums[i];
  for (let i = 0; i < nums.length; i++) {
    if (half == (sum - nums[i] - half)) return i;
    half += nums[i];
  }
  return -1;
};