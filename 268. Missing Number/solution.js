/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += (i - nums[i]);
  }
  result += nums.length;
  return result;
};