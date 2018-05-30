/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  const length = nums.length;
  let result = 0, continuous = 0;
  for (let i = 0; i < length; i++) {
    continuous = nums[i] > (nums[i - 1] || 0) ? continuous + 1 : 1;
    if (continuous > result) result = continuous;
  }

  return result;
};