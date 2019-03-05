/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0], cur = 0;
  for(let i = 0; i < nums.length; i++){
    cur += nums[i];
    if(cur < 0 || cur < nums[i]) cur = nums[i];
    max = Math.max(cur, max);
  }
  return max;
};