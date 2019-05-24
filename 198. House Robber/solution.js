/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length;
  for (let i = 2; i < n; i++) {
    nums[i] += Math.max(nums[i - 2], nums[i - 3] || 0);
  }
  return n ? Math.max(nums[n - 1], nums[n - 2] || 0) : 0;
};
