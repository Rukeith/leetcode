/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const hash = {};
  const n = nums.length;
  const majority = Math.floor(n / 2);

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    hash[num] = (hash[num] || 0) + 1
    if (hash[num] > majority) return num;
  }
  return nums[0]
};