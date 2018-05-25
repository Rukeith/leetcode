/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let len = nums.length;
  let sum = max = 0;
  for (let i = 0; i < k; i++) {
    sum+=nums[i];
  }

  max = sum;
  for (let j = k; j < len; j++) {
    sum = sum + nums[j] - nums[j - k];
    if (sum > max) max = sum;
  }
  return max / k;
};